/*
 * Sectionation v0.2
 * http://github.com/nickawalsh/sectionation
 *
 * Copyright (C) 2011 by Nick Walsh
 *
 * MIT License
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */

(function($){

  $.fn.sectionation = function(userOptions) {
    var options = $.extend({}, $.fn.sectionation.defaults, userOptions);
    var $this = $(this);
    var sections = $(options.selector);
    
    window.onscroll = function(){ highlight(); }
      
    function highlight() {
      var dft = $(window).scrollTop();
      var active = compare(dft);
      $this.not($this[active]).removeClass(options.active);
      $this.eq(active).addClass(options.active);
    }
    highlight();
      
    function compare(dft) {
      if(dft + options.offset < sections.eq(1).offset().top) {
        active = 0;
      } else if(options.footer && dft + $(window).height() >= $(document).height()) {
        active = $this.last().index();
      } else {
        for(i = 1; i < sections.length; i++) {
          if(dft + options.offset - sections.eq(i).offset().top >= 0) {
            active = i;
          }
        }
      }
      return active;
    }
    
    navs = options.extranav;
    navs.push($this.selector);
    
    $.each(navs, function(index, value) {
      var nav = $(value);
      nav.bind('click.sectionation', function() {
        if( nav.index($(this)) == 0 ) {
          $('html,body').animate({scrollTop:0}, options.speed);
        } else {
          var scrollTo = sections.eq(nav.index($(this))).offset().top - options.offset;
          $('html,body').animate({scrollTop:scrollTo}, options.speed);
        }
        return false;
      });
    });
  };
  
  $.fn.sectionation.defaults = {
    active: 'active',
    extranav: [],
    footer: false,
    offset: 0,
    selector: '.sectionation',
    speed: 700
  }
  
})(jQuery);