<template lang="pug">
div
  mixin region
    - for (var counter2 = 0; counter2 < 2; counter2++) {
      .base
        - for (var counter = 0; counter < 18; counter++) {
          .hole
        - }
    - }

  mixin hinges(side)
    .hinge.top(class=side)
      .screw
      .screw
    .hinge.bottom(class=side)
      .screw
      .screw

  mixin doors(side)
    .door(class=side)
      .face.front
        +region
      .face.back
        +hinges(side + ' inside')
        +region
      .face.top

  #background
    .stripe
    .stripe
    .stripe

  #windows
    .shadow.right
    .shadow.left

    .flowerpot
      .hook.right
      .hook.left
      .flowers
      .frontFace
        .head
      .backFace
      .leftFace
      .rightFace

    +hinges('right' + ' outside')
    +hinges('left' + ' outside')

    .frame.out
      .frame.in
        .interior

    +doors('right')
    +doors('left')
</template>