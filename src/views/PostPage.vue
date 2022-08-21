<template>
  <main v-if="!loading">
    <div class="buttons">
      <button @click="this.$router.back">Back</button>
      <button v-if="ending === 'edit'" @click="deletePost">X</button>
      <button v-else-if="isWill" @click="editPost">Edit</button>
    </div>

    <h2 v-if="!auth">{{ post.title }}</h2>
    <span>{{ editedString(post.date, newPost ? null : post.edited) }}</span>
    <p v-if="!auth">{{ post.text }}</p>

    <template v-if="auth">
      <div class="category">
        <h3>Category</h3>
        <input
          list="categories"
          type="text"
          name="category"
          @input="handleCat"
          :value="post.category"
          :disabled="!auth"
        />
        <datalist :disabled="!auth" id="categories" name="category" @change="handlePostChange">
          <option value=""></option>
          <option v-for="(c, i) in cats" :value="c" :key="i">
            {{ c }}
          </option>
        </datalist>
      </div>

      <input
        name="title"
        :value="post.title"
        placeholder="Title"
        type="text"
        @change="handlePostChange"
        :disabled="!auth"
      />

      <span>{{ editedString(post.date, newPost ? null : post.edited) }}</span>

      <textarea
        :value="post.text"
        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, iste. Dignissimos perferendis iusto molestias totam animi beatae odio aliquam ut minima nulla, doloribus quae natus fuga, voluptatibus illo! Cupiditate, commodi."
        @change="handlePostChange"
        name="text"
        :disabled="!auth"
      />

      <button v-if="auth" :disabled="!auth" @click="submitPost">Submit</button>
    </template>
  </main>
  <section class="comments">
    <h2>Comments</h2>
    <Comment v-for="cmnt in post.comments" v-bind="cmnt" :key="cmnt.id" />
    <form @submit="addComment">
      <input
        type="text"
        name="name"
        placeholder="Name"
        @input="handleCommentChange"
        :value="newComment.name"
      />
      <textarea
        name="content"
        placeholder="Comment"
        @input="handleCommentChange"
        :value="newComment.content"
      />
      <button>Add Comment</button>
    </form>
  </section>
</template>

<script>
  import axios from "../plugins/axios";
  import { momentize, editedString } from "../assets/functions";
  import Comment from "../components/Comment.vue";
  export default {
    name: "post-page-wu",
    components: { Comment },
    methods: {
      editedString,
      momentize,
      editPost() {
        this.$router.push(`${this.$route.path}/edit`);
      },
      async submitPost(e) {
        e.preventDefault();
        this.newPost
          ? await axios.post("/posts/new", this.post)
          : await axios.put(`/posts/${this.post.id}`, this.post);
        this.$router.push(`/blog/post/${this.post.id}`);
      },
      handlePostChange(e) {
        this.post[e.target.name] = e.target.value;
      },
      handleCat(e) {
        const catName = e.target.value;
        this.handlePostChange(e);
        this.cats = this.categories.filter((cat) => new RegExp(catName, "i").test(cat));
      },
      deletePost() {
        window.confirm(`Do you really want to delete ${this.post.title}?`)
          ? axios
              .delete(`/posts/${this.post.id}`)
              .then(() => this.$router.push("/blog"))
              .catch((err) => console.error(err))
          : alert("You have chosen not to delete the post.");
      },
      handleCommentChange(e) {
        this.newComment[e.target.name] = e.target.value;
      },
      async addComment(e) {
        e.preventDefault();
        if (this.newComment.content && this.newComment.name) {
          const stamp = this.newComment;
          await axios.post("/comments/new", stamp);
          this.post.comments.push(stamp);
          this.newComment = {
            post_id: this.$route.params.id,
            content: "",
            name: "",
            date: Date.now().toString(),
          };
        } else alert("Both name and comment fields are required to post a comment.");
      },
    },
    data() {
      return {
        post: {
          text: "",
          date: Date.now().toString(),
          edited: Date.now().toString(),
          title: "",
          category: "",
          comments: [],
        },
        loading: true,
        newComment: {
          post_id: this.$route.params.id,
          content: "",
          name: "",
          date: Date.now().toString(),
        },
      };
    },
    mounted() {
      if (this.ending !== "new")
        axios
          .get(`/posts/${this.$route.params.id}`)
          .then(({ data }) => {
            this.post = data;
            this.loading = false;
          })
          .catch((err) => console.error(err));
      else this.loading = false;
    },
    computed: {
      ending() {
        return this.$route.path.split("/").pop();
      },
      auth() {
        return /new|edit/i.test(this.ending);
      },
      newPost() {
        return this.ending === "new";
      },
      isWill() {
        return this.$store.state.isWill;
      },
      cats() {
        return this.$store.state.categories;
      },
    },
  };
</script>

<style lang="scss" scoped>
  main {
    width: 100%;
    margin: 50px auto 0;
    padding: 25px;
    box-sizing: border-box;
    @include flex(column, center, center, wrap);
    background: $text-bg;
    box-shadow: 0 0 250px 15px $text-bg;

    button {
      @include button();
      align-self: flex-start;
      margin-top: -35px;
      margin-bottom: 35px;
    }

    div.buttons {
      @include flex($justify: space-between);
      width: 100%;
    }

    h2 {
      margin: 0;
      font-size: 4rem;
    }

    span {
      font-size: 1.3rem;
      color: slategray;
    }

    p {
      font-size: 2rem;
      white-space: pre-line;
    }

    input,
    textarea {
      width: 100%;
      box-sizing: border-box;
      border-radius: 5px;
    }

    input {
      font-size: 4rem;
      padding: 0;
      text-align: center;
    }

    textarea {
      min-height: 200px;
      resize: none;
      padding: 0 15px;
    }

    button {
      @include button(3rem);
      margin-top: 5px;
    }

    div.category {
      @include flex(column, center, center);
      background: field;
      border: 1px solid black;
      position: relative;
      padding: 15px 0 5px;
      margin-bottom: 15px;
      border-radius: 5px;

      h3 {
        font-size: 1.75rem;
        background: linear-gradient(transparent 41%, field 41%);
        position: absolute;
        top: -27.5px;
        left: 5px;
      }

      input,
      datalist {
        outline: none;
        background: none;
        border: none;
        font-size: 2rem;
        text-transform: capitalize;
      }
    }
  }

  section.comments {
    width: 100%;
    box-sizing: border-box;
    @include flex(column, center, flex-end);
    background: linear-gradient($text-bg, transparent);

    h2 {
      width: 100%;
      border-radius: 0 0 50% 0;
      font-size: 3rem;
      border-bottom: 2px ridge $mid;
      margin: 10px auto 0;
      text-align: center;
      color: $dark;
    }

    form {
      width: 100%;
      @include flex(column, center, center);

      input,
      textarea {
        margin: 5px auto;
      }

      input {
        font-size: 2rem;
        text-align: center;
        font-family: $header-font;
      }

      textarea {
        font-size: 1.5rem;
        font-family: $body-font;
        resize: none;
        width: 60%;
      }

      button {
        @include button;
      }
    }
  }
</style>
