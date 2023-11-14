var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cac04a7c-f436-4cbe-ba61-6da170b5d6ef","8e220109-93ea-4311-bbc2-b399d2907ae2","b81e6205-2482-49f8-955d-56365a9d6325","0fe2d52b-8050-440e-8dce-38ccf62f1c40"],"propsByKey":{"cac04a7c-f436-4cbe-ba61-6da170b5d6ef":{"name":"background","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"UDSITTzErIt53rwIDO.NY4EGVBN7tWXB","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/cac04a7c-f436-4cbe-ba61-6da170b5d6ef.png"},"8e220109-93ea-4311-bbc2-b399d2907ae2":{"name":"enemy_1","sourceUrl":null,"frameSize":{"x":438,"y":614},"frameCount":2,"looping":true,"frameDelay":12,"version":"Bk9CptD3wFSIUNRxgyAGCk2MXyMXeV2X","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":876,"y":614},"rootRelativePath":"assets/8e220109-93ea-4311-bbc2-b399d2907ae2.png"},"b81e6205-2482-49f8-955d-56365a9d6325":{"name":"player","sourceUrl":null,"frameSize":{"x":438,"y":613},"frameCount":2,"looping":true,"frameDelay":12,"version":"zcw8bPkdqJIffSdy1pBvjXzhgYR.41lq","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":876,"y":613},"rootRelativePath":"assets/b81e6205-2482-49f8-955d-56365a9d6325.png"},"0fe2d52b-8050-440e-8dce-38ccf62f1c40":{"name":"enemy_2","sourceUrl":null,"frameSize":{"x":429,"y":613},"frameCount":1,"looping":true,"frameDelay":12,"version":"WdhSpLi9O1v7Gbv2IbEV0NRkSqX5AhdO","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":429,"y":613},"rootRelativePath":"assets/0fe2d52b-8050-440e-8dce-38ccf62f1c40.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var background = createSprite(200, 200);
background.setAnimation("background");

var player = createSprite(200, 200);
player.setAnimation("player");
player.scale = 0.13;

var enemy_1 = createSprite(20, 20);
enemy_1.setAnimation("enemy_1");
enemy_1.scale = 0.13;
enemy_1.velocityX = 1;
enemy_1.velocityY = 2;
var vida = 10;

var enemy_2 = createSprite(350, 20);
enemy_2.setAnimation("enemy_2");
enemy_2.scale = 0.13;
enemy_2.velocityX = 3;
enemy_2.velocityY = 4;

var verificar = 0;
createEdgeSprites();
function draw() {
  drawSprites();
  fill(rgb(0, 255, 0));
  textSize(35);
  text("VIDAS: "+vida, 20, 30);
  console.log(verificar);
  if (verificar > 0) {
    verificar = verificar-1;
  }
  if (player.bounce(enemy_1)) {
    if (verificar == 0) {
      vida = vida-1;
    }
    verificar = 30;
  }
  if (player.bounce(enemy_2)) {
    if (verificar == 0) {
      vida = vida-1;
    }
    verificar = 30;
  }
  player.bounceOff(edges);
  enemy_1.bounceOff(edges);
  enemy_2.bounceOff(edges);
  if(keyDown("left"))
  {
    player.velocityX = -5
  }
  if(keyDown("right"))
  {
    player.velocityX = 5
  }
  if(keyDown("up"))
  {
    player.velocityY = -5
  }
  if(keyDown("down"))
  {
    player.velocityY = 5
  }

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
