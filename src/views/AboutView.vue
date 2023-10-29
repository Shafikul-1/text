<script setup>
import { ref, onMounted } from "vue";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
const getText = ref([]);

onMounted(() => {
  onSnapshot(collection(db, "text"), (querySnapshot) => {
    const products = [];
    querySnapshot.forEach((document) => {
      const getFetchData = {
        id: document.id,
        text: document.data().text,
      };
      products.push(getFetchData);
    });
    getText.value = products;
  });
});

const updateText = (updatedText) => {
  const docRef = doc(db, "text", updatedText.id);
  updateDoc(docRef, {
    text: updatedText.text,
  })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
};

const calculateRows = (text) => {
  // Calculate the number of line breaks in the text and adjust rows accordingly
  return text.split("\n").length;
};
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="text" v-for="text in getText" :key="text.id">
          <h3 class="mb-3">Please Insert Your Text</h3>
          <div class="form-floating">
            <textarea name="" v-model="text.text" @input="updateText(text)" :rows="calculateRows(text.text)"
              placeholder="Leave a comment here" id="floatingTextarea2" cols="30" class="form-control"></textarea>
            <!-- rows="1" -->

            <label for="floatingTextarea2">Input Your Text Here</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- Add your styles here -->
<style scoped>
textarea {
  resize: none;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.619);
}
</style>
