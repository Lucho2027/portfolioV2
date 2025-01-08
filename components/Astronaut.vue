<script lang="ts" setup>
const spaceManRef = shallowRef(null);
const { animations, scene, group } = await useGLTF('/spaceManFalling.glb');

watch(spaceManRef, async () => {
  console.log(spaceManRef.value)
  if (spaceManRef.value) {
    const { actions } = await useAnimations(animations, spaceManRef)
    actions['Idle'].play()
  }
})
</script>
<template>
  <primitive :object="scene" ref="spaceManRef" />
</template>
