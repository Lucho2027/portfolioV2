<template>
  <TresCanvas window-size :alpha="true">
    <TresPerspectiveCamera :position="[2.5, 4, -1]" :look-at="[1.5, 0, 1.3]" />

    <!-- <OrbitControls /> -->
    <MouseParallax :factor="1" :ease="0.5" />
    <Precipitation :speed="0.15" :count="5" :randomness="0.7" color="#4285f4" :size="0.05" />
    <Precipitation :speed="0.15" :count="5" :randomness="0.7" color="#34A853" :size="0.05" />
    <Precipitation :speed="0.15" :count="5" :randomness="0.7" color="#FBBC05" :size="0.05" />
    <Precipitation :speed="0.15" :count="5" :randomness="0.7" color="#EA4335" :size="0.05" />
    <!-- <TresMesh > -->
    <Suspense>
      <Astronaut :rotation="[2.3, 4.5, 1.25]" />
    </Suspense>
  </TresCanvas>
  <!-- </TresMesh> -->
</template>
