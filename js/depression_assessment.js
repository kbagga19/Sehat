$(window).on("load",function(){
    $(".loader-wrapper").delay(1000).fadeOut("slow");
  });

  const goToAssessment = () =>{
    window.location.href = `http://localhost:5500/html/user_graph.html`;
  }
