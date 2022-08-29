var data = $0;

var partners = [];

for (var i = 0; i < data.childElementCount; i++)
{
	var partner = {name:data.children[i].children[0].children[1].children[0].innerHTML};
	
	var linkData = data.children[i].children[0].children[1].children[1].children;
	
	//console.log(linkData);
	
	for (var j = 0; j < linkData.length; j++)
	{
		var link = linkData[j].children[0];
		
		//console.log(link);
		
		switch (link.title)
		{
			case "youtube": partner.youtube = link.href; break;
			case "twitch": partner.twitch = link.href; break;
			case "website": partner.website = link.href; break;
		}
	}
	
	partners.push(partner);
}

partners.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

console.log(partners);