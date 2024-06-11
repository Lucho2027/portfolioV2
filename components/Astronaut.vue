<script lang="ts" setup>
const spaceManRef = ref();
const { animations, scene } = await useGLTF('/spaceManFalling.glb');

onMounted(async () => {
  if (!spaceManRef.value) return;
  const { actions } = await useAnimations(animations, spaceManRef);
  actions['Idle'].play();
});
</script>
<template>
  <primitive :object="scene" ref="spaceManRef" />
</template>
