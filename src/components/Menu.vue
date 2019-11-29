<template>
  <div class="menu">
    <p>
    </p>
    <h3></h3>
    <ul>
    <li>
      <div>
        <h3>5 meat feast</h3>
        <img src="https://mobilestatic.littlecaesars.com/weborderingimages/75814153-d5c5-4cef-84b8-8745be410436.jpg">
      </div>
    </li>
    <li>
      <div>
        <h3>veggie</h3>
        <img src="https://mobilestatic.littlecaesars.com/weborderingimages/cef4b693-3edc-47c4-8542-b89758df9181.jpg">
      </div>
    </li>
    <li>
      <div>
        <h3>3 meat treat</h3>
        <img src="https://mobilestatic.littlecaesars.com/weborderingimages/da2c9d18-bad2-469a-9635-a73037d7b92a.jpg">
      </div>
    </li>
    <li>
      <div>
        <h3>hula hawaiian</h3>
        <img src="https://mobilestatic.littlecaesars.com/weborderingimages/fcde7565-8e2f-4d26-8046-55b993eedb2f.jpg">
      </div>
    </li>
    <li>
      <div>
        <h3>ultimate supreme</h3>
        <img src="https://mobilestatic.littlecaesars.com/weborderingimages/be065d23-fa3d-48f8-8f50-a2679aaa0d28.jpg">
      </div>
    </li>
    <li>
      <div>
        <h3>classic pepperoni</h3>
        <img src="https://mobilestatic.littlecaesars.com/weborderingimages/225cdf4d-8493-4dff-9462-95f6f1fa4dc6.jpg">
      </div>
    </li>
    <li>
      <div>
        <h3>classic cheese</h3>
        <img src="https://mobilestatic.littlecaesars.com/weborderingimages/b8b19b2e-5421-4b20-b3ef-02b802ca7d4f.jpg">
      </div>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
