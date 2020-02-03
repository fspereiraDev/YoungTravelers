<template >
  <div>
  

  <b-modal id="bv-modal-example" hide-footer>
    <template v-slot:modal-title>
      Using <code>$bvModal</code> Methods
    </template>
    <div class="d-block text-center">
      <h3>Hello From This Modal!</h3>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
  </b-modal>
</div>

</template>

<script>
export default {
    name: "Modal"
}
</script>

<style scoped>
.modal {
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border-radius: 50px;
}
</style>