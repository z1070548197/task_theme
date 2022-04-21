<template>
  <div class="contact ContentBox">
    <div class="left">
      <div class="">
        <h1 class="">Contact</h1>
        <div class="">
          <div class="">
            <p class="">To contact us, please fill out the form below.</p>
            <form name="contact" action="#" method="post">
              <div class="">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  class="inputs"
                  required=""
                />
              </div>
              <div class="">
                <input
                  type="text"
                  placeholder="Email Address"
                  name="mail"
                  class="inputs"
                  required=""
                />
              </div>
              <div class="">
                <input
                  type="text"
                  placeholder="Subject"
                  name="title"
                  class="inputs"
                  required=""
                />
              </div>
              <div class="">
                <textarea
                  rows="5"
                  cols="30"
                  placeholder="Message"
                  name="message"
                  class="inputs"
                  required=""
                ></textarea>
              </div>
              <input type="submit" value="Submit" class="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <search-bar />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
export default {
  components: {
    SearchBar,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  .left {
    flex: 1;
    background-color: #fff;
    text-align: left;
    padding: 15px;
    .inputs {
      border: 1px solid rgba(0, 0, 0, 0);
      width: 100%;
      background-color: rgb(229 231 235);
      padding: 15px;
      box-sizing: border-box;
      font-size: 22px;
      margin-bottom: 15px;
      &::placeholder{
        color: rgb(168, 168, 168);
      }
      &:focus {
        border: 1px solid #000;
        outline: none;
        background: #fff;
      }
    }
    .submit{
      width: 100%;
      border:none;
      font-weight: 500;
      height: 50px;
      font-size: 20px;
      color:#fff;
     background-color: rgb(31 41 55);
    }
  }
}
</style>
