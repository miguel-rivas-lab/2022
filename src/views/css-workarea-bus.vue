<template lang="pug">
#minibus
  .window.w01
  .window.w03
    - for (var counter = 1; counter < 9; counter++) {
      .air_dust(class='dust0' + counter)
    - }
  .door_base
    .door
      .window.w02
      .handle.h02
  .roller.r01
  .roller.r02
  .handle.h01
  .bumper.front
  .bumper.back
  .shadow
</template>