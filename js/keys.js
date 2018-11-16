var mc = new MyController();

mc.bindActions({
  "left":{
    keys: [ mc.KEYCODES.KEY_A,  mc.KEYCODES.LEFT_ARROW],
  },
  "right":{
    keys: [ mc.KEYCODES.RIGHT_ARROW, mc.KEYCODES.KEY_D ],
  },
  "up":{
    keys: [ mc.KEYCODES.UP_ARROW, mc.KEYCODES.KEY_W ],
  },
  "down":{
    keys: [ mc.KEYCODES.DOWN_ARROW, mc.KEYCODES.KEY_S ],
  }
});

mc.attachToDOM( window );