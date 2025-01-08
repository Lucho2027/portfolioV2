<script lang="ts" setup>

const spaceManRef = ref(null);
const { animations, scene } = await useGLTF('spaceManFalling.glb');

let actions;
const { pause, resume } = useRenderLoop();

// Watch for when the ref is set and initialize animations
watch(spaceManRef, async (value) => {
  if (value) {
    const animationData = useAnimations(animations, spaceManRef.value);
    actions = animationData.actions;
    pause()
    // Ensure the "Idle" animation is played only once
    if (actions && actions['Idle']) {
      actions['Idle'].play();
      resume(); // Stop rendering loop if no further animations
    }
  }
});

// Prevent unnecessary reactivity issues with nextTick
nextTick(() => {
  if (spaceManRef.value) {
    console.log('SpaceMan reference initialized');
  }
});
</script>

<template>
  <primitive :object="scene" ref="spaceManRef" />
</template>
