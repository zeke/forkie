appAPI.ready(function($) {

  //console.log("forkie!", Date())

  // Are we on github.com?
  if (!document.location.href.match(/github\.com/)) return;

  // Are we on a repo's network page?
  var pathParts = location.pathname.match(/\/+([^/]*)\/([^(/|\?)]*)\/network/);
  if (!pathParts) return;

  // Set up DOM container
  $('#js-repo-pjax-container').prepend("<ol id='forks'></ol>")
  var forkList = $("#forks")

  // Assemble forks API URL
  var user = pathParts[1]
  var repo = pathParts[2]
  var url = "https://api.github.com/repos/" + user + "/" + repo + "/forks?per_page=1000&sort=watchers"
  console.log("url", url)

  // Add a heading to the list of NPM modules
  //$('#js-repo-pjax-container').append("<h2>npm dependencies</h2>")

  appAPI.request.get(url, function(data) {
    var forks = JSON.parse(data);
    console.log('forks', forks);

    if (forks.length === 0) {
      forkList.append("<li>No forks found. :(</li>")
      return
    }

    // Sort by fork count
    forks.sort(function(a, b) {
      if (a.forks === b.forks) {
        return 0;
      } else if (a.forks < b.forks) {
        return 1;
      } else {
        return -1;
      }
    });

    // Render forks
    for (var i in forks) {
      var fork = forks[i]
      forkList.append("      <li>        <span class='name'><a href='" + fork.html_url + "'>" + fork.full_name + "</a></span>        <span class='count'><em>" + fork.watchers + "</em> watchers</span>        <span class='count'><em>" + fork.forks + "</em> forks</span>      </li>    ");
    }

    // Add styles
    $('#forks').css({
      listStyle: 'none',
      margin: '0 0 30px 0'
    });
    $('#forks > li').css({
      padding: '10px 0',
      borderBottom: "1px solid #DDD"
    });
    $('#forks > li > span').css({
      display: "inline-block"
    });
    $('#forks > li > span.name').css({
      minWidth: "500px",
      maxWidth: "600px"
    });
    $('#forks > li > span.count').css({
      color: "#999",
      minWidth: "100px"
    });

    $('#forks > li > span.count em').css({
      color: "#000",
      fontStyle: "normal"
    });

  });

});
