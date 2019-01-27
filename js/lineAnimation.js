$(document).ready(function() {
  $(window).scroll(function() {

     //Registration
     var flag_reg = 0;
     if(flag_reg == 0)
      {
        if($(window).scrollTop() > ($("#registration").offset().top - 300))
           {
            $(".path_reg").css("animation", "draw 11s linear");
            $(".path_fast_reg").css("animation", "draw_fast 8s linear");
            $(".path_dash_reg").css("animation", "draw_dash 6s linear");
            $(".highlight_reg").css("animation", "colour 11s linear");
            flag_reg = 1;

            setTimeout(function(){
                $(".path_reg").css("stroke-dashoffset", "0");
                $(".path_fast_reg").css("stroke-dashoffset", "0");
                $(".path_dash_reg").css("opacity", "1");
                $(".highlight_reg").css("opacity", "1");
             },2000);
            }
      }

      //mentoring
      var flag_men = 0;
      if(flag_men == 0)
      {
        if($(window).scrollTop() > ($("#mentoring").offset().top - 300))
        {
             $(".path_men").css("animation", "draw 11s linear");
             $(".path_fast_men").css("animation", "draw_fast 8s linear");
             $(".path_dash_men").css("animation", "draw_dash 6s linear");
             $(".highlight_men").css("animation", "colour 11s linear");
             flag_men = 1;

            setTimeout(function(){
                $(".path_men").css("stroke-dashoffset", "0");
                $(".path_fast_men").css("stroke-dashoffset", "0");
                $(".path_dash_men").css("opacity", "1");
                $(".highlight_men").css("opacity", "1");
            },2000);
        }
      }

      //networking
      var flag_net = 0;
      if(flag_net == 0 && flag_men == 1)
      {
      if($(window).scrollTop() > ($("#networking").offset().top - 300))
        {
            $(".path_net").css("animation", "draw 11s linear");
            $(".path_fast_net").css("animation", "draw_fast 8s linear");
            $(".path_dash_net").css("animation", "draw_dash 6s linear");
            $(".highlight_net").css("animation", "colour 11s linear");
            flag_net = 1;

            setTimeout(function(){
                $(".path_net").css("stroke-dashoffset", "0");
                $(".path_fast_net").css("stroke-dashoffset", "0");
                $(".path_dash_net").css("opacity", "1");
                $(".highlight_net").css("opacity", "1");
            },2000);
        }
      }

      //grandfinale
      var flag_gf = 0;
      if(flag_gf == 0 && flag_net == 1)
       {
        if($(window).scrollTop() > ($("#grandfinale").offset().top - 300))
        {
            $(".path_gf").css("animation", "draw 11s linear");
            $(".path_fast_gf").css("animation", "draw_fast 8s linear");
            $(".path_dash_gf").css("animation", "draw_dash 6s linear");
            $(".highlight_gf").css("animation", "colour 11s linear");
            flag_gf = 1;

            setTimeout(function(){
                $(".path_gf").css("stroke-dashoffset", "0");
                $(".path_fast_gf").css("stroke-dashoffset", "0");
                $(".path_dash_gf").css("opacity", "1");
                $(".highlight_gf").css("opacity", "1");
                console.log("new property set");
            },2000);
        }
       }

  });

});
