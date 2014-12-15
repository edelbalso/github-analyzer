var GitHubApi = require("github");

var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});

github.authenticate({
    type: "basic",
    username: "edelbalso",
    password: "lendinghome123"
});


// github.repos.getAll({
//     owner: "edelbalso"
// }, function(err, res) {
// 	if (err) {
// 		console.log(err)
// 	}
// 	printRepos(res)
// });

github.repos.getCommits({
    user: "edelbalso",
    repo: "dickjokes"
}, function(err, res) {
	if (err) {
		console.log(err)
	}
	whoDidMore(res)
});



function printRepos (res) {
	//takes a response and prints the names of the repos
	res.forEach(function(repo){
		console.log(repo.name)
	})
}

function whoDidMore (repo) {
	
	var committers = [];
	
	repo.forEach(function(commit){
		if (committers.indexOf(commit.committer.login) === -1) {
			console.log('foo')
			committers.push(commit.committer.login)
		}
	})

	printCommitCounts(repo, committers)

}


function printCommitCounts (repo, names) {

		// iterate over each name in the array, going committer by committer
	committers.forEach(function(name){
		var currentUserCommits = 0;


		// for each committer, iterate over the repo and check how many commits they made
		// increment a counter if their name === commit.committer.login
		repo.forEach(function(commit){
			if (committers.indexOf(commit.committer.login) === -1) {
				console.log('foo')
				committers.push(commit.committer.login)
			}
		})
	})

	console.log(committers)
}

// console.log(committer + " : " + commits + " commits.")