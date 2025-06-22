(function(Scratch) {
  'use strict';

  // Force le canvas à être transparent
  const renderer = Scratch.vm.runtime.renderer;

  if (renderer && renderer._drawBackground) {
    // Écrase la fonction qui dessine l’arrière-plan
    renderer._drawBackground = function() {
      // Ne fait rien = pas de fond dessiné
    };
  }

  // Extension vide, juste pour appliquer ce patch
  class TransparentBackground {
    getInfo() {
      return {
        id: 'transparentbackground',
        name: 'Fond Transparent',
        blocks: [],
      };
    }
  }

  Scratch.extensions.register(new TransparentBackground());
})(Scratch);
