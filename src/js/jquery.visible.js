module.exports = (function($){

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *       the user visible viewport of a web browser.
   *       only accounts for vertical position, not horizontal.
   */
  var $w=$(window);
  $.fn.visible = function(partial,hidden,direction,container,offset=200){

      if (this.length < 1)
          return;

// Set direction default to 'both'.
direction = direction || 'both';
    
      var $t          = this.length > 1 ? this.eq(0) : this,
          isContained = typeof container !== 'undefined' && container !== null,
          $c				  = isContained ? $(container) : $w,
          wPosition        = isContained ? $c.position() : 0,
          t           = $t.get(0),
          vpWidth     = $c.outerWidth(),
          vpHeight    = $c.outerHeight(),
          clientSize  = hidden === true ? t.offsetWidth * t.offsetHeight : true;

      if (typeof t.getBoundingClientRect === 'function'){

          // Use this native browser method, if available.
          var rec = t.getBoundingClientRect(),
              tViz = isContained ?
                      rec.top + offset - wPosition.top >= 0 && rec.top + offset < vpHeight + wPosition.top :
                      rec.top + offset >= 0 && rec.top + offset < vpHeight,
              bViz = isContained ?
                      rec.bottom - offset - wPosition.top > 0 && rec.bottom - offset <= vpHeight + wPosition.top :
                      rec.bottom - offset > 0 && rec.bottom - offset <= vpHeight,
              lViz = isContained ?
                      rec.left + offset - wPosition.left >= 0 && rec.left + offset < vpWidth + wPosition.left :
                      rec.left + offset >= 0 && rec.left + offset <  vpWidth,
              rViz = isContained ?
                      rec.right - offset - wPosition.left > 0  && rec.right - offset < vpWidth + wPosition.left  :
                      rec.right - offset > 0 && rec.right - offset <= vpWidth,
              vVisible   = partial ? tViz || bViz : tViz && bViz,
              hVisible   = partial ? lViz || rViz : lViz && rViz,
  vVisible = (rec.top < 0 && rec.bottom > vpHeight) ? true : vVisible,
              hVisible = (rec.left < 0 && rec.right > vpWidth) ? true : hVisible;

          if(direction === 'both')
              return clientSize && vVisible && hVisible;
          else if(direction === 'vertical')
              return clientSize && vVisible;
          else if(direction === 'horizontal')
              return clientSize && hVisible;
      } else {

          var viewTop 				= isContained ? 0 : wPosition,
              viewBottom      = viewTop + vpHeight,
              viewLeft        = $c.scrollLeft(),
              viewRight       = viewLeft + vpWidth,
              position          = $t.position(),
              _top            = position.top,
              _bottom         = _top + $t.height(),
              _left           = position.left,
              _right          = _left + $t.width(),
              compareTop      = partial === true ? _bottom : _top,
              compareBottom   = partial === true ? _top : _bottom,
              compareLeft     = partial === true ? _right : _left,
              compareRight    = partial === true ? _left : _right;

          if(direction === 'both')
              return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
          else if(direction === 'vertical')
              return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
          else if(direction === 'horizontal')
              return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
      }
  };

});
