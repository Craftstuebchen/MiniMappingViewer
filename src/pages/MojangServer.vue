<template>
  <MojangMappings :version-id="version" :client="false" :to-obf="true"/>
</template>

<script>
import MojangMappings from "components/MojangMappings";
export default {
  name: "MojangServer",
  components: { MojangMappings },
  computed: {
    version() {
      return this.$route.params.versionId;
    }
  }
};
</script>

<style scoped></style>
