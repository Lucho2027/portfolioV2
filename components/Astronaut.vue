<script lang="ts" setup>
const spaceManRef = ref();
const { animations, scene, group } = await useGLTF('/spaceManFalling.glb');

watchEffect(async () => {
  if (!spaceManRef.value) return;
  const { actions } = await useAnimations(animations, spaceManRef);
  actions['Idle'].play();
});
</script>
<template>
  <primitive :object="scene" ref="spaceManRef" />
</template>
