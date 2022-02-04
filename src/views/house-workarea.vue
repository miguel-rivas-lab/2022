<template lang="pug">
div
  mixin fence(classname)
    div(class=classname)
      - for (var counter = 1; counter <= 20; counter++) {
        .piece(class="p"+counter)
      - }

  .house
    .fence
      +fence('back')
      +fence('right')
      +fence('left')
    .grass
    .base.top
    .base.bottom
    .base.front
    .base.back
    .base.right
    .base.left
    .wall.front.left
    .wall.front.right
    .wall.front.top
    .wall.front.door
      .slide.s1
        .frame.right
        .frame.left
        .frame.center
        .frame.top
        .frame.bottom
      .slide.s2
        .frame.right
        .frame.left
        .frame.center
        .frame.top
        .frame.bottom
    .wall.main.back
    .wall.main.right
      .bar.top
      .bar.center
      .bar.bottom
    .wall.main.left
      .bar.top
      .bar.center
      .bar.bottom
    .chimney
      .front
      .back
      .right
      .left
    .roof.top
    .roof.bottom
    .roof.right
    .roof.left
    .roof.front
    .roof.back
</template>