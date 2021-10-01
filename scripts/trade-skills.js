var app = angular.module('tradeSkills', []);

// here we define our unique filter
app.filter("unique", function () {
	// we will return a function which will take in a collection
	// and a keyname
	return function (collection, keyname) {
		// we define our output and keys array;
		var output = [],
			keys = [];

		// we utilize angular's foreach function
		// this takes in our original collection and an iterator function
		angular.forEach(collection, function (item) {
			// we check to see whether our object exists
			var key = item[keyname];
			// if it's not already part of our keys array
			if (keys.indexOf(key) === -1) {
				// add it to our keys array
				keys.push(key);
				// push this item to our final output array
				output.push(item);
			}
		});
		// return our array which should be devoid of
		// any duplicates
		return output;
	};
});


app.controller('tradeSkillsCntrl', function ($scope) {

	// Convert export from Trade SKills Exporter to an object
	$scope.submitSkills = function () {

		var inputArray = $scope.tradeSkillsInput.split('\n');

		$scope.tradeSkills = [];
		var categories = [];
		for (var i = 0; i < inputArray.length; i++) {
			var category = inputArray[i].substr(0, inputArray[i].indexOf('-'));
			if (category == '') {
				category = 'Miscelaneous';
			}
			var skill = {
				name: inputArray[i].substr(0, inputArray[i].indexOf('(')),
				id: inputArray[i].split('=').pop().split(')')[0],
				category: category
			};
			$scope.tradeSkills.push(skill);
			categories.push(skill.category);
		}

		$scope.categories = [...new Set(categories)];
		$scope.tradeSkillsArray = JSON.stringify($scope.tradeSkills);
		$scope.categoriesArray = JSON.stringify($scope.categories);
		document.getElementById('wowProfessionCategories').innerHTML = $scope.categoriesArray;
		document.getElementById('wowProfessions').innerHTML = $scope.tradeSkillsArray;

	}

	// Copy the values to teh clipboard
	$scope.copyWowTradeSkills = function (id) {
		var copyText = document.getElementById(id).textContent;
		navigator.clipboard.writeText(copyText);
		alert('Copied to Clipboard!');
	}

	// Enchanting Categories
	$scope.enchantingCategoriesStored = ["Enchant Boots ", "Enchant Ring ", "Enchant Weapon ", "Enchant Bracer ", "Enchant Gloves ", "Miscelaneous", "Enchant Chest ", "Enchant 2H Weapon ", "Enchant Cloak ", "Enchant Shield "];

	// Enchanting Skills
	$scope.enchantingSkillsStored = [{
		"name": "Enchant Boots - Surefooted",
		"id": "27954",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Ring - Healing Power",
		"id": "27926",
		"category": "Enchant Ring "
	}, {
		"name": "Enchant Weapon - Mongoose",
		"id": "27984",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Boots - Boar's Speed",
		"id": "34008",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Cat's Swiftness",
		"id": "34007",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Bracer - Spellpower",
		"id": "27917",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Gloves - Major Spellpower",
		"id": "33997",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Spell Strike",
		"id": "33994",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Ring - Spellpower",
		"id": "27924",
		"category": "Enchant Ring "
	}, {
		"name": "Enchant Ring - Striking",
		"id": "27920",
		"category": "Enchant Ring "
	}, {
		"name": "Runed Eternium Rod",
		"id": "32667",
		"category": "Miscelaneous"
	}, {
		"name": "Enchant Chest - Exceptional Stats",
		"id": "27960",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Gloves - Major Healing",
		"id": "33999",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Major Strength",
		"id": "33995",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Weapon - Major Healing",
		"id": "34010",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Major Spellpower",
		"id": "27975",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Potency",
		"id": "27972",
		"category": "Enchant Weapon "
	}, {
		"name": "Runed Adamantite Rod",
		"id": "32665",
		"category": "Miscelaneous"
	}, {
		"name": "Void Sphere",
		"id": "28028",
		"category": "Miscelaneous"
	}, {
		"name": "Brilliant Mana Oil",
		"id": "25130",
		"category": "Miscelaneous"
	}, {
		"name": "Brilliant Wizard Oil",
		"id": "25129",
		"category": "Miscelaneous"
	}, {
		"name": "Enchant 2H Weapon - Agility",
		"id": "27837",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Greater Impact",
		"id": "13937",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Impact",
		"id": "13695",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Lesser Impact",
		"id": "13529",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Lesser Intellect",
		"id": "7793",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Lesser Spirit",
		"id": "13380",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Major Intellect",
		"id": "20036",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Major Spirit",
		"id": "20035",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Minor Impact",
		"id": "7745",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant 2H Weapon - Superior Impact",
		"id": "20030",
		"category": "Enchant 2H Weapon "
	}, {
		"name": "Enchant Boots - Agility",
		"id": "13935",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Fortitude",
		"id": "27950",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Greater Agility",
		"id": "20023",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Greater Stamina",
		"id": "20020",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Lesser Agility",
		"id": "13637",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Lesser Spirit",
		"id": "13687",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Lesser Stamina",
		"id": "13644",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Minor Agility",
		"id": "7867",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Minor Speed",
		"id": "13890",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Minor Stamina",
		"id": "7863",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Spirit",
		"id": "20024",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Boots - Stamina",
		"id": "13836",
		"category": "Enchant Boots "
	}, {
		"name": "Enchant Bracer - Assault",
		"id": "34002",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Brawn",
		"id": "27899",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Deflection",
		"id": "13931",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Greater Intellect",
		"id": "20008",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Greater Spirit",
		"id": "13846",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Greater Stamina",
		"id": "13945",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Greater Strength",
		"id": "13939",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Healing Power",
		"id": "23802",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Intellect",
		"id": "13822",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Lesser Deflection",
		"id": "13646",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Lesser Intellect",
		"id": "13622",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Lesser Spirit",
		"id": "7859",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Lesser Stamina",
		"id": "13501",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Lesser Strength",
		"id": "13536",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Major Intellect",
		"id": "34001",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Mana Regeneration",
		"id": "23801",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Minor Agility",
		"id": "7779",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Minor Deflection",
		"id": "7428",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Minor Health",
		"id": "7418",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Minor Spirit",
		"id": "7766",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Minor Stamina",
		"id": "7457",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Minor Strength",
		"id": "7782",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Spirit",
		"id": "13642",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Stamina",
		"id": "13648",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Stats",
		"id": "27905",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Strength",
		"id": "13661",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Superior Healing",
		"id": "27911",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Superior Spirit",
		"id": "20009",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Superior Stamina",
		"id": "20011",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Bracer - Superior Strength",
		"id": "20010",
		"category": "Enchant Bracer "
	}, {
		"name": "Enchant Chest - Exceptional Health",
		"id": "27957",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Greater Health",
		"id": "13640",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Greater Mana",
		"id": "13663",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Greater Stats",
		"id": "20025",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Health",
		"id": "7857",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Lesser Absorption",
		"id": "13538",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Lesser Health",
		"id": "7748",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Lesser Mana",
		"id": "7776",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Lesser Stats",
		"id": "13700",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Major Health",
		"id": "20026",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Major Mana",
		"id": "20028",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Major Spirit",
		"id": "33990",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Mana",
		"id": "13607",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Minor Absorption",
		"id": "7426",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Minor Health",
		"id": "7420",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Minor Mana",
		"id": "7443",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Minor Stats",
		"id": "13626",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Restore Mana Prime",
		"id": "33991",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Stats",
		"id": "13941",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Superior Health",
		"id": "13858",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Chest - Superior Mana",
		"id": "13917",
		"category": "Enchant Chest "
	}, {
		"name": "Enchant Cloak - Defense",
		"id": "13635",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Dodge",
		"id": "25086",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Fire Resistance",
		"id": "13657",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Greater Agility",
		"id": "34004",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Greater Defense",
		"id": "13746",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Greater Fire Resistance",
		"id": "25081",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Greater Nature Resistance",
		"id": "25082",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Greater Resistance",
		"id": "20014",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Lesser Agility",
		"id": "13882",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Lesser Fire Resistance",
		"id": "7861",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Lesser Protection",
		"id": "13421",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Lesser Shadow Resistance",
		"id": "13522",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Major Armor",
		"id": "27961",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Minor Agility",
		"id": "13419",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Minor Protection",
		"id": "7771",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Minor Resistance",
		"id": "7454",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Resistance",
		"id": "13794",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Spell Penetration",
		"id": "34003",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Stealth",
		"id": "25083",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Subtlety",
		"id": "25084",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Cloak - Superior Defense",
		"id": "20015",
		"category": "Enchant Cloak "
	}, {
		"name": "Enchant Gloves - Advanced Herbalism",
		"id": "13868",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Advanced Mining",
		"id": "13841",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Agility",
		"id": "13815",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Assault",
		"id": "33996",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Blasting",
		"id": "33993",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Fire Power",
		"id": "25078",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Fishing",
		"id": "13620",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Frost Power",
		"id": "25074",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Greater Agility",
		"id": "20012",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Greater Strength",
		"id": "20013",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Healing Power",
		"id": "25079",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Herbalism",
		"id": "13617",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Mining",
		"id": "13612",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Minor Haste",
		"id": "13948",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Riding Skill",
		"id": "13947",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Shadow Power",
		"id": "25073",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Skinning",
		"id": "13698",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Strength",
		"id": "13887",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Superior Agility",
		"id": "25080",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Gloves - Threat",
		"id": "25072",
		"category": "Enchant Gloves "
	}, {
		"name": "Enchant Shield - Frost Resistance",
		"id": "13933",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Greater Spirit",
		"id": "13905",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Greater Stamina",
		"id": "20017",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Intellect",
		"id": "27945",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Lesser Block",
		"id": "13689",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Lesser Protection",
		"id": "13464",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Lesser Spirit",
		"id": "13485",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Lesser Stamina",
		"id": "13631",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Major Stamina",
		"id": "34009",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Minor Stamina",
		"id": "13378",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Resilience",
		"id": "44383",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Spirit",
		"id": "13659",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Stamina",
		"id": "13817",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Superior Spirit",
		"id": "20016",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Shield - Tough Shield",
		"id": "27944",
		"category": "Enchant Shield "
	}, {
		"name": "Enchant Weapon - Agility",
		"id": "23800",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Crusader",
		"id": "20034",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Demonslaying",
		"id": "13915",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Fiery Weapon",
		"id": "13898",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Greater Striking",
		"id": "13943",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Healing Power",
		"id": "22750",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Icy Chill",
		"id": "20029",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Lesser Beastslayer",
		"id": "13653",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Lesser Elemental Slayer",
		"id": "13655",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Lesser Striking",
		"id": "13503",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Lifestealing",
		"id": "20032",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Mighty Intellect",
		"id": "23804",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Mighty Spirit",
		"id": "23803",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Minor Beastslayer",
		"id": "7786",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Minor Striking",
		"id": "7788",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Spell Power",
		"id": "22749",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Strength",
		"id": "23799",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Striking",
		"id": "13693",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Superior Striking",
		"id": "20031",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Unholy Weapon",
		"id": "20033",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchant Weapon - Winter's Might",
		"id": "21931",
		"category": "Enchant Weapon "
	}, {
		"name": "Enchanted Leather",
		"id": "17181",
		"category": "Miscelaneous"
	}, {
		"name": "Enchanted Thorium",
		"id": "17180",
		"category": "Miscelaneous"
	}, {
		"name": "Greater Magic Wand",
		"id": "14807",
		"category": "Miscelaneous"
	}, {
		"name": "Greater Mystic Wand",
		"id": "14810",
		"category": "Miscelaneous"
	}, {
		"name": "Large Prismatic Shard",
		"id": "28022",
		"category": "Miscelaneous"
	}, {
		"name": "Lesser Magic Wand",
		"id": "14293",
		"category": "Miscelaneous"
	}, {
		"name": "Lesser Mana Oil",
		"id": "25127",
		"category": "Miscelaneous"
	}, {
		"name": "Lesser Mystic Wand",
		"id": "14809",
		"category": "Miscelaneous"
	}, {
		"name": "Lesser Wizard Oil",
		"id": "25126",
		"category": "Miscelaneous"
	}, {
		"name": "Minor Mana Oil",
		"id": "25125",
		"category": "Miscelaneous"
	}, {
		"name": "Minor Wizard Oil",
		"id": "25124",
		"category": "Miscelaneous"
	}, {
		"name": "Nexus Transformation",
		"id": "42613",
		"category": "Miscelaneous"
	}, {
		"name": "Prismatic Sphere",
		"id": "28027",
		"category": "Miscelaneous"
	}, {
		"name": "Runed Arcanite Rod",
		"id": "20051",
		"category": "Miscelaneous"
	}, {
		"name": "Runed Copper Rod",
		"id": "7421",
		"category": "Miscelaneous"
	}, {
		"name": "Runed Fel Iron Rod",
		"id": "32664",
		"category": "Miscelaneous"
	}, {
		"name": "Runed Golden Rod",
		"id": "13628",
		"category": "Miscelaneous"
	}, {
		"name": "Runed Silver Rod",
		"id": "7795",
		"category": "Miscelaneous"
	}, {
		"name": "Runed Truesilver Rod",
		"id": "13702",
		"category": "Miscelaneous"
	}, {
		"name": "Small Prismatic Shard",
		"id": "42615",
		"category": "Miscelaneous"
	}, {
		"name": "Smoking Heart of the Mountain",
		"id": "15596",
		"category": "Miscelaneous"
	}, {
		"name": "Superior Mana Oil",
		"id": "28016",
		"category": "Miscelaneous"
	}, {
		"name": "Superior Wizard Oil",
		"id": "28019",
		"category": "Miscelaneous"
	}, {
		"name": "Wizard Oil",
		"id": "25128",
		"category": "Miscelaneous"
	}];



	// Tailoring Skills
	$scope.tailoringSkillsStored = [{
		"name": "Golden Spellthread",
		"color": "a335ee",
		"id": 24276,
		"texture": 135954,
		"num": 1,
		"categorie": "Item Enhancement",
		"items": [{
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}, {
			"name": "Primal Life",
			"color": "1eff00",
			"texture": "132848",
			"num": 10,
			"id": 21886
		}, {
			"name": "Primal Nether",
			"color": "0070dd",
			"texture": "132850",
			"num": 1,
			"id": 23572
		}],
		"spellId": 31433
	}, {
		"name": "Silver Spellthread",
		"color": "0070dd",
		"id": 24275,
		"texture": 136048,
		"num": 1,
		"categorie": "Item Enhancement",
		"items": [{
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}, {
			"name": "Primal Life",
			"color": "1eff00",
			"texture": "132848",
			"num": 5,
			"id": 21886
		}],
		"spellId": 31431
	}, {
		"name": "Netherweave Net",
		"color": "ffffff",
		"id": 24268,
		"texture": 134325,
		"num": 2,
		"categorie": "Other",
		"items": [{
			"name": "Netherweave Cloth",
			"color": "ffffff",
			"texture": "132898",
			"num": 3,
			"id": 21877
		}],
		"spellId": 31460
	}, {
		"name": "Primal Mooncloth Bag",
		"color": "0070dd",
		"id": 21876,
		"texture": 133658,
		"num": 1,
		"categorie": "Bag",
		"items": [{
			"name": "Primal Mooncloth",
			"color": "0070dd",
			"texture": "132897",
			"num": 8,
			"id": 21845
		}, {
			"name": "Netherweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 21881
		}],
		"spellId": 26763
	}, {
		"name": "Imbued Netherweave Bag",
		"color": "1eff00",
		"id": 21843,
		"texture": 133657,
		"num": 1,
		"categorie": "Bag",
		"items": [{
			"name": "Bolt of Imbued Netherweave",
			"color": "1eff00",
			"texture": "132900",
			"num": 4,
			"id": 21842
		}, {
			"name": "Netherweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 21881
		}, {
			"name": "Greater Planar Essence",
			"color": "1eff00",
			"texture": "132860",
			"num": 1,
			"id": 22446
		}],
		"spellId": 26749
	}, {
		"name": "Netherweave Bag",
		"color": "1eff00",
		"id": 21841,
		"texture": 133656,
		"num": 1,
		"categorie": "Bag",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 4,
			"id": 21840
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 26746
	}, {
		"name": "Mooncloth Bag",
		"color": "1eff00",
		"id": 14155,
		"texture": 133647,
		"num": 1,
		"categorie": "Bag",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 1,
			"id": 14342
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18445
	}, {
		"name": "Runecloth Bag",
		"color": "ffffff",
		"id": 14046,
		"texture": 133652,
		"num": 1,
		"categorie": "Bag",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 5,
			"id": 14048
		}, {
			"name": "Rugged Leather",
			"color": "ffffff",
			"texture": "134251",
			"num": 2,
			"id": 8170
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18405
	}, {
		"name": "Mageweave Bag",
		"color": "ffffff",
		"id": 10050,
		"texture": 133640,
		"num": 1,
		"categorie": "Bag",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 4,
			"id": 4339
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 4291
		}],
		"spellId": 12065
	}, {
		"name": "Red Mageweave Bag",
		"color": "ffffff",
		"id": 10051,
		"texture": 133643,
		"num": 1,
		"categorie": "Bag",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 4,
			"id": 4339
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12079
	}, {
		"name": "Black Silk Pack",
		"color": "ffffff",
		"id": 5765,
		"texture": 133629,
		"num": 1,
		"categorie": "Bag",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 5,
			"id": 4305
		}, {
			"name": "Black Dye",
			"color": "ffffff",
			"texture": "134843",
			"num": 1,
			"id": 2325
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 4,
			"id": 2321
		}],
		"spellId": 6695
	}, {
		"name": "Green Silk Pack",
		"color": "ffffff",
		"id": 5764,
		"texture": 133631,
		"num": 1,
		"categorie": "Bag",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 4,
			"id": 4305
		}, {
			"name": "Heavy Leather",
			"color": "ffffff",
			"texture": "134256",
			"num": 3,
			"id": 4234
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 3,
			"id": 2321
		}, {
			"name": "Green Dye",
			"color": "ffffff",
			"texture": "134743",
			"num": 1,
			"id": 2605
		}],
		"spellId": 6693
	}, {
		"name": "Small Silk Pack",
		"color": "ffffff",
		"id": 4245,
		"texture": 133628,
		"num": 1,
		"categorie": "Bag",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 3,
			"id": 4305
		}, {
			"name": "Heavy Leather",
			"color": "ffffff",
			"texture": "134256",
			"num": 2,
			"id": 4234
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 3,
			"id": 2321
		}],
		"spellId": 3813
	}, {
		"name": "Green Woolen Bag",
		"color": "ffffff",
		"id": 4241,
		"texture": 133642,
		"num": 1,
		"categorie": "Bag",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 4,
			"id": 2997
		}, {
			"name": "Green Dye",
			"color": "ffffff",
			"texture": "134743",
			"num": 1,
			"id": 2605
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 3758
	}, {
		"name": "Red Woolen Bag",
		"color": "ffffff",
		"id": 5763,
		"texture": 133643,
		"num": 1,
		"categorie": "Bag",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 4,
			"id": 2997
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 1,
			"id": 2604
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 6688
	}, {
		"name": "Woolen Bag",
		"color": "ffffff",
		"id": 4240,
		"texture": 133639,
		"num": 1,
		"categorie": "Bag",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 3,
			"id": 2997
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 3757
	}, {
		"name": "Linen Bag",
		"color": "ffffff",
		"id": 4238,
		"texture": 133622,
		"num": 1,
		"categorie": "Bag",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 3,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 3,
			"id": 2320
		}],
		"spellId": 3755
	}, {
		"name": "Spellfire Bag",
		"color": "0070dd",
		"id": 21858,
		"texture": 133659,
		"num": 1,
		"categorie": "Enchanting Bag",
		"items": [{
			"name": "Spellcloth",
			"color": "0070dd",
			"texture": "132910",
			"num": 6,
			"id": 24271
		}, {
			"name": "Greater Planar Essence",
			"color": "1eff00",
			"texture": "132860",
			"num": 4,
			"id": 22446
		}, {
			"name": "Netherweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 21881
		}],
		"spellId": 26755
	}, {
		"name": "Big Bag of Enchantment",
		"color": "1eff00",
		"id": 22249,
		"texture": 133662,
		"num": 1,
		"categorie": "Enchanting Bag",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Large Brilliant Shard",
			"color": "0070dd",
			"texture": "132873",
			"num": 4,
			"id": 14344
		}, {
			"name": "Enchanted Leather",
			"color": "ffffff",
			"texture": "134418",
			"num": 4,
			"id": 12810
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 14227
		}],
		"spellId": 27660
	}, {
		"name": "Enchanted Runecloth Bag",
		"color": "1eff00",
		"id": 22248,
		"texture": 133666,
		"num": 1,
		"categorie": "Enchanting Bag",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 5,
			"id": 14048
		}, {
			"name": "Greater Eternal Essence",
			"color": "1eff00",
			"texture": "132864",
			"num": 2,
			"id": 16203
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 27659
	}, {
		"name": "Enchanted Mageweave Pouch",
		"color": "1eff00",
		"id": 22246,
		"texture": 133665,
		"num": 1,
		"categorie": "Enchanting Bag",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 4,
			"id": 4339
		}, {
			"name": "Vision Dust",
			"color": "ffffff",
			"texture": "132859",
			"num": 4,
			"id": 11137
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 27658
	}, {
		"name": "Bag of Jewels",
		"color": "1eff00",
		"id": 24270,
		"texture": 133648,
		"num": 1,
		"categorie": "Gem Bag",
		"items": [{
			"name": "Bolt of Imbued Netherweave",
			"color": "1eff00",
			"texture": "132900",
			"num": 6,
			"id": 21842
		}, {
			"name": "Knothide Leather",
			"color": "ffffff",
			"texture": "134259",
			"num": 4,
			"id": 21887
		}],
		"spellId": 31459
	}, {
		"name": "Satchel of Cenarius",
		"color": "1eff00",
		"id": 22252,
		"texture": 133669,
		"num": 1,
		"categorie": "Herb Bag",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 2,
			"id": 14342
		}, {
			"name": "Black Lotus",
			"color": "1eff00",
			"texture": "134202",
			"num": 1,
			"id": 13468
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 14227
		}],
		"spellId": 27725
	}, {
		"name": "Cenarion Herb Bag",
		"color": "1eff00",
		"id": 22251,
		"texture": 133663,
		"num": 1,
		"categorie": "Herb Bag",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 5,
			"id": 14048
		}, {
			"name": "Purple Lotus",
			"color": "ffffff",
			"texture": "134198",
			"num": 10,
			"id": 8831
		}, {
			"name": "Morrowgrain",
			"color": "ffffff",
			"texture": "134185",
			"num": 8,
			"id": 11040
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 27724
	}, {
		"name": "Ebon Shadowbag",
		"color": "0070dd",
		"id": 21872,
		"texture": 133667,
		"num": 1,
		"categorie": "Soul Bag",
		"items": [{
			"name": "Shadowcloth",
			"color": "0070dd",
			"texture": "132887",
			"num": 6,
			"id": 24272
		}, {
			"name": "Netherweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 21881
		}],
		"spellId": 26759
	}, {
		"name": "Core Felcloth Bag",
		"color": "a335ee",
		"id": 21342,
		"texture": 133664,
		"num": 1,
		"categorie": "Soul Bag",
		"items": [{
			"name": "Felcloth",
			"color": "ffffff",
			"texture": "132888",
			"num": 20,
			"id": 14256
		}, {
			"name": "Core Leather",
			"color": "ffffff",
			"texture": "132386",
			"num": 16,
			"id": 17012
		}, {
			"name": "Bloodvine",
			"color": "1eff00",
			"texture": "134189",
			"num": 8,
			"id": 19726
		}, {
			"name": "Essence of Fire",
			"color": "1eff00",
			"texture": "135830",
			"num": 4,
			"id": 7078
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 14227
		}],
		"spellId": 26087
	}, {
		"name": "Felcloth Bag",
		"color": "0070dd",
		"id": 21341,
		"texture": 133667,
		"num": 1,
		"categorie": "Soul Bag",
		"items": [{
			"name": "Felcloth",
			"color": "ffffff",
			"texture": "132888",
			"num": 12,
			"id": 14256
		}, {
			"name": "Enchanted Leather",
			"color": "ffffff",
			"texture": "134418",
			"num": 6,
			"id": 12810
		}, {
			"name": "Dark Rune",
			"color": "1eff00",
			"texture": "136192",
			"num": 2,
			"id": 20520
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 14227
		}],
		"spellId": 26086
	}, {
		"name": "Soul Pouch",
		"color": "1eff00",
		"id": 21340,
		"texture": 133670,
		"num": 1,
		"categorie": "Soul Bag",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Rugged Leather",
			"color": "ffffff",
			"texture": "134251",
			"num": 4,
			"id": 8170
		}, {
			"name": "Ichor of Undeath",
			"color": "ffffff",
			"texture": "134437",
			"num": 2,
			"id": 7972
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 26085
	}, {
		"name": "Arcanoweave Robe",
		"color": "0070dd",
		"id": 21868,
		"texture": 132642,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 12,
			"id": 21840
		}, {
			"name": "Arcane Dust",
			"color": "ffffff",
			"texture": "132854",
			"num": 20,
			"id": 22445
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 26784
	}, {
		"name": "Flameheart Vest",
		"color": "0070dd",
		"id": 30839,
		"texture": 132648,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 9,
			"id": 21840
		}, {
			"name": "Primal Fire",
			"color": "1eff00",
			"texture": "132847",
			"num": 9,
			"id": 21884
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 37884
	}, {
		"name": "Battlecast Hood",
		"color": "a335ee",
		"id": 24267,
		"texture": 133172,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Imbued Netherweave",
			"color": "1eff00",
			"texture": "132900",
			"num": 12,
			"id": 21842
		}, {
			"name": "Primal Might",
			"color": "0070dd",
			"texture": "136050",
			"num": 8,
			"id": 23571
		}, {
			"name": "Primal Nether",
			"color": "0070dd",
			"texture": "132850",
			"num": 1,
			"id": 23572
		}],
		"spellId": 31456
	}, {
		"name": "Battlecast Pants",
		"color": "a335ee",
		"id": 24263,
		"texture": 134606,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Imbued Netherweave",
			"color": "1eff00",
			"texture": "132900",
			"num": 12,
			"id": 21842
		}, {
			"name": "Primal Might",
			"color": "0070dd",
			"texture": "136050",
			"num": 8,
			"id": 23571
		}, {
			"name": "Primal Nether",
			"color": "0070dd",
			"texture": "132850",
			"num": 1,
			"id": 23572
		}],
		"spellId": 31453
	}, {
		"name": "Frozen Shadoweave Robe",
		"color": "a335ee",
		"id": 21871,
		"texture": 132649,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Shadowcloth",
			"color": "0070dd",
			"texture": "132887",
			"num": 14,
			"id": 24272
		}, {
			"name": "Primal Water",
			"color": "1eff00",
			"texture": "132852",
			"num": 16,
			"id": 21885
		}, {
			"name": "Netherweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 21881
		}],
		"spellId": 26758
	}, {
		"name": "Whitemend Hood",
		"color": "a335ee",
		"id": 24264,
		"texture": 133155,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Primal Mooncloth",
			"color": "0070dd",
			"texture": "132897",
			"num": 10,
			"id": 21845
		}, {
			"name": "Primal Might",
			"color": "0070dd",
			"texture": "136050",
			"num": 5,
			"id": 23571
		}, {
			"name": "Primal Nether",
			"color": "0070dd",
			"texture": "132850",
			"num": 1,
			"id": 23572
		}],
		"spellId": 31454
	}, {
		"name": "Frozen Shadoweave Boots",
		"color": "a335ee",
		"id": 21870,
		"texture": 132560,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Shadowcloth",
			"color": "0070dd",
			"texture": "132887",
			"num": 8,
			"id": 24272
		}, {
			"name": "Primal Water",
			"color": "1eff00",
			"texture": "132852",
			"num": 12,
			"id": 21885
		}, {
			"name": "Netherweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 21881
		}],
		"spellId": 26757
	}, {
		"name": "Resolute Cape",
		"color": "a335ee",
		"id": 24258,
		"texture": 133768,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Primal Mooncloth",
			"color": "0070dd",
			"texture": "132897",
			"num": 10,
			"id": 21845
		}, {
			"name": "Primal Earth",
			"color": "1eff00",
			"texture": "132846",
			"num": 12,
			"id": 22452
		}, {
			"name": "Primal Nether",
			"color": "0070dd",
			"texture": "132850",
			"num": 1,
			"id": 23572
		}],
		"spellId": 31448
	}, {
		"name": "Soulcloth Shoulders",
		"color": "a335ee",
		"id": 21864,
		"texture": 135033,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Soulcloth",
			"color": "ffffff",
			"texture": "132909",
			"num": 6,
			"id": 21844
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 4,
			"id": 14341
		}],
		"spellId": 26780
	}, {
		"name": "Arcanoweave Boots",
		"color": "0070dd",
		"id": 21867,
		"texture": 132541,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 8,
			"id": 21840
		}, {
			"name": "Arcane Dust",
			"color": "ffffff",
			"texture": "132854",
			"num": 16,
			"id": 22445
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 26783
	}, {
		"name": "Flameheart Gloves",
		"color": "0070dd",
		"id": 30838,
		"texture": 132953,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 7,
			"id": 21840
		}, {
			"name": "Primal Fire",
			"color": "1eff00",
			"texture": "132847",
			"num": 7,
			"id": 21884
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 37883
	}, {
		"name": "Imbued Netherweave Robe",
		"color": "0070dd",
		"id": 21861,
		"texture": 132653,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Imbued Netherweave",
			"color": "1eff00",
			"texture": "132900",
			"num": 6,
			"id": 21842
		}, {
			"name": "Netherweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 21881
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 26777
	}, {
		"name": "Imbued Netherweave Tunic",
		"color": "0070dd",
		"id": 21862,
		"texture": 132686,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Imbued Netherweave",
			"color": "1eff00",
			"texture": "132900",
			"num": 6,
			"id": 21842
		}, {
			"name": "Netherweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 21881
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 26778
	}, {
		"name": "Netherweave Tunic",
		"color": "1eff00",
		"id": 21855,
		"texture": 135008,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 8,
			"id": 21840
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 26774
	}, {
		"name": "Arcanoweave Bracers",
		"color": "0070dd",
		"id": 21866,
		"texture": 132618,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 6,
			"id": 21840
		}, {
			"name": "Arcane Dust",
			"color": "ffffff",
			"texture": "132854",
			"num": 12,
			"id": 22445
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 26782
	}, {
		"name": "Blackstrike Bracers",
		"color": "0070dd",
		"id": 24251,
		"texture": 132606,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Imbued Netherweave",
			"color": "1eff00",
			"texture": "132900",
			"num": 4,
			"id": 21842
		}, {
			"name": "Primal Fire",
			"color": "1eff00",
			"texture": "132847",
			"num": 8,
			"id": 21884
		}],
		"spellId": 31437
	}, {
		"name": "Cloak of Arcane Evasion",
		"color": "0070dd",
		"id": 30831,
		"texture": 133768,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Imbued Netherweave",
			"color": "1eff00",
			"texture": "132900",
			"num": 4,
			"id": 21842
		}, {
			"name": "Primal Mana",
			"color": "1eff00",
			"texture": "132849",
			"num": 3,
			"id": 22457
		}, {
			"name": "Primal Life",
			"color": "1eff00",
			"texture": "132848",
			"num": 3,
			"id": 21886
		}, {
			"name": "Netherweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 21881
		}],
		"spellId": 37873
	}, {
		"name": "Flameheart Bracers",
		"color": "0070dd",
		"id": 30837,
		"texture": 132610,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 5,
			"id": 21840
		}, {
			"name": "Primal Fire",
			"color": "1eff00",
			"texture": "132847",
			"num": 5,
			"id": 21884
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 37882
	}, {
		"name": "Unyielding Bracers",
		"color": "0070dd",
		"id": 24249,
		"texture": 132610,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Imbued Netherweave",
			"color": "1eff00",
			"texture": "132900",
			"num": 4,
			"id": 21842
		}, {
			"name": "Primal Earth",
			"color": "1eff00",
			"texture": "132846",
			"num": 8,
			"id": 22452
		}],
		"spellId": 31434
	}, {
		"name": "Netherweave Robe",
		"color": "1eff00",
		"id": 21854,
		"texture": 132670,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 8,
			"id": 21840
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 26773
	}, {
		"name": "Imbued Netherweave Boots",
		"color": "0070dd",
		"id": 21860,
		"texture": 132541,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Imbued Netherweave",
			"color": "1eff00",
			"texture": "132900",
			"num": 4,
			"id": 21842
		}, {
			"name": "Knothide Leather",
			"color": "ffffff",
			"texture": "134259",
			"num": 6,
			"id": 21887
		}, {
			"name": "Netherweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 21881
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 26776
	}, {
		"name": "Netherweave Boots",
		"color": "1eff00",
		"id": 21853,
		"texture": 132539,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 6,
			"id": 21840
		}, {
			"name": "Knothide Leather",
			"color": "ffffff",
			"texture": "134259",
			"num": 2,
			"id": 21887
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 26772
	}, {
		"name": "Imbued Netherweave Pants",
		"color": "0070dd",
		"id": 21859,
		"texture": 134634,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Imbued Netherweave",
			"color": "1eff00",
			"texture": "132900",
			"num": 5,
			"id": 21842
		}, {
			"name": "Netherweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 21881
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 26775
	}, {
		"name": "Frozen Shadoweave Shoulders",
		"color": "a335ee",
		"id": 21869,
		"texture": 135056,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Shadowcloth",
			"color": "0070dd",
			"texture": "132887",
			"num": 4,
			"id": 24272
		}, {
			"name": "Primal Water",
			"color": "1eff00",
			"texture": "132852",
			"num": 10,
			"id": 21885
		}, {
			"name": "Netherweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 21881
		}],
		"spellId": 26756
	}, {
		"name": "Netherweave Pants",
		"color": "1eff00",
		"id": 21852,
		"texture": 134589,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 6,
			"id": 21840
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 26771
	}, {
		"name": "Soulcloth Gloves",
		"color": "a335ee",
		"id": 21863,
		"texture": 132951,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Soulcloth",
			"color": "ffffff",
			"texture": "132909",
			"num": 5,
			"id": 21844
		}, {
			"name": "Knothide Leather",
			"color": "ffffff",
			"texture": "134259",
			"num": 6,
			"id": 21887
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 4,
			"id": 14341
		}],
		"spellId": 26779
	}, {
		"name": "Netherweave Gloves",
		"color": "1eff00",
		"id": 21851,
		"texture": 132961,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 4,
			"id": 21840
		}, {
			"name": "Knothide Leather",
			"color": "ffffff",
			"texture": "134259",
			"num": 2,
			"id": 21887
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 26770
	}, {
		"name": "Netherweave Belt",
		"color": "1eff00",
		"id": 21850,
		"texture": 132493,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 3,
			"id": 21840
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 26765
	}, {
		"name": "Netherweave Bracers",
		"color": "1eff00",
		"id": 21849,
		"texture": 132606,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 3,
			"id": 21840
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 26764
	}, {
		"name": "Glacial Cloak",
		"color": "a335ee",
		"id": 22658,
		"texture": 133768,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Frozen Rune",
			"color": "0070dd",
			"texture": "134422",
			"num": 5,
			"id": 22682
		}, {
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Essence of Water",
			"color": "1eff00",
			"texture": "136007",
			"num": 2,
			"id": 7080
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 14227
		}],
		"spellId": 28208
	}, {
		"name": "Glacial Gloves",
		"color": "a335ee",
		"id": 22654,
		"texture": 132940,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Frozen Rune",
			"color": "0070dd",
			"texture": "134422",
			"num": 5,
			"id": 22682
		}, {
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Essence of Water",
			"color": "1eff00",
			"texture": "136007",
			"num": 4,
			"id": 7080
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 14227
		}],
		"spellId": 28205
	}, {
		"name": "Glacial Vest",
		"color": "a335ee",
		"id": 22652,
		"texture": 132649,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Frozen Rune",
			"color": "0070dd",
			"texture": "134422",
			"num": 7,
			"id": 22682
		}, {
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 8,
			"id": 14048
		}, {
			"name": "Essence of Water",
			"color": "1eff00",
			"texture": "136007",
			"num": 6,
			"id": 7080
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 8,
			"id": 14227
		}],
		"spellId": 28207
	}, {
		"name": "Glacial Wrists",
		"color": "a335ee",
		"id": 22655,
		"texture": 132606,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Frozen Rune",
			"color": "0070dd",
			"texture": "134422",
			"num": 4,
			"id": 22682
		}, {
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 2,
			"id": 14048
		}, {
			"name": "Essence of Water",
			"color": "1eff00",
			"texture": "136007",
			"num": 2,
			"id": 7080
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 14227
		}],
		"spellId": 28209
	}, {
		"name": "Flarecore Leggings",
		"color": "a335ee",
		"id": 19165,
		"texture": 134586,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 8,
			"id": 14342
		}, {
			"name": "Fiery Core",
			"color": "0070dd",
			"texture": "135812",
			"num": 5,
			"id": 17010
		}, {
			"name": "Lava Core",
			"color": "0070dd",
			"texture": "136025",
			"num": 3,
			"id": 17011
		}, {
			"name": "Essence of Fire",
			"color": "1eff00",
			"texture": "135830",
			"num": 10,
			"id": 7078
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 14227
		}],
		"spellId": 23667
	}, {
		"name": "Gaea's Embrace",
		"color": "0070dd",
		"id": 22660,
		"texture": 133769,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bloodvine",
			"color": "1eff00",
			"texture": "134189",
			"num": 1,
			"id": 19726
		}, {
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 2,
			"id": 14342
		}, {
			"name": "Living Essence",
			"color": "1eff00",
			"texture": "136006",
			"num": 4,
			"id": 12803
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 14227
		}],
		"spellId": 28210
	}, {
		"name": "Sylvan Crown",
		"color": "0070dd",
		"id": 22757,
		"texture": 132767,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 2,
			"id": 14342
		}, {
			"name": "Living Essence",
			"color": "1eff00",
			"texture": "136006",
			"num": 2,
			"id": 12803
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 14227
		}],
		"spellId": 28481
	}, {
		"name": "Sylvan Shoulders",
		"color": "0070dd",
		"id": 22758,
		"texture": 135049,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 2,
			"id": 14048
		}, {
			"name": "Living Essence",
			"color": "1eff00",
			"texture": "136006",
			"num": 4,
			"id": 12803
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 14227
		}],
		"spellId": 28482
	}, {
		"name": "Sylvan Vest",
		"color": "0070dd",
		"id": 22756,
		"texture": 132742,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Bloodvine",
			"color": "1eff00",
			"texture": "134189",
			"num": 2,
			"id": 19726
		}, {
			"name": "Living Essence",
			"color": "1eff00",
			"texture": "136006",
			"num": 2,
			"id": 12803
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 14227
		}],
		"spellId": 28480
	}, {
		"name": "Flarecore Robe",
		"color": "a335ee",
		"id": 19156,
		"texture": 132659,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 10,
			"id": 14342
		}, {
			"name": "Fiery Core",
			"color": "0070dd",
			"texture": "135812",
			"num": 2,
			"id": 17010
		}, {
			"name": "Lava Core",
			"color": "0070dd",
			"texture": "136025",
			"num": 3,
			"id": 17011
		}, {
			"name": "Essence of Fire",
			"color": "1eff00",
			"texture": "135830",
			"num": 6,
			"id": 7078
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 14227
		}],
		"spellId": 23666
	}, {
		"name": "Bloodvine Boots",
		"color": "0070dd",
		"id": 19684,
		"texture": 132559,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 3,
			"id": 14342
		}, {
			"name": "Bloodvine",
			"color": "1eff00",
			"texture": "134189",
			"num": 3,
			"id": 19726
		}, {
			"name": "Enchanted Leather",
			"color": "ffffff",
			"texture": "134418",
			"num": 4,
			"id": 12810
		}, {
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 14227
		}],
		"spellId": 24093
	}, {
		"name": "Bloodvine Leggings",
		"color": "0070dd",
		"id": 19683,
		"texture": 134608,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 4,
			"id": 14342
		}, {
			"name": "Bloodvine",
			"color": "1eff00",
			"texture": "134189",
			"num": 4,
			"id": 19726
		}, {
			"name": "Powerful Mojo",
			"color": "ffffff",
			"texture": "136011",
			"num": 4,
			"id": 12804
		}, {
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 14227
		}],
		"spellId": 24092
	}, {
		"name": "Bloodvine Vest",
		"color": "0070dd",
		"id": 19682,
		"texture": 132648,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 3,
			"id": 14342
		}, {
			"name": "Bloodvine",
			"color": "1eff00",
			"texture": "134189",
			"num": 5,
			"id": 19726
		}, {
			"name": "Powerful Mojo",
			"color": "ffffff",
			"texture": "136011",
			"num": 4,
			"id": 12804
		}, {
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 14227
		}],
		"spellId": 24091
	}, {
		"name": "Argent Shoulders",
		"color": "0070dd",
		"id": 19059,
		"texture": 135044,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 5,
			"id": 14342
		}, {
			"name": "Guardian Stone",
			"color": "1eff00",
			"texture": "135228",
			"num": 2,
			"id": 12809
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 14227
		}],
		"spellId": 23665
	}, {
		"name": "Flarecore Wraps",
		"color": "a335ee",
		"id": 18263,
		"texture": 132608,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 6,
			"id": 14342
		}, {
			"name": "Fiery Core",
			"color": "0070dd",
			"texture": "135812",
			"num": 8,
			"id": 17010
		}, {
			"name": "Essence of Fire",
			"color": "1eff00",
			"texture": "135830",
			"num": 2,
			"id": 7078
		}, {
			"name": "Enchanted Leather",
			"color": "ffffff",
			"texture": "134418",
			"num": 6,
			"id": 12810
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 4,
			"id": 14341
		}],
		"spellId": 22759
	}, {
		"name": "Cloak of Warding",
		"color": "0070dd",
		"id": 18413,
		"texture": 133758,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 12,
			"id": 14048
		}, {
			"name": "Guardian Stone",
			"color": "1eff00",
			"texture": "135228",
			"num": 4,
			"id": 12809
		}, {
			"name": "Arcanite Bar",
			"color": "1eff00",
			"texture": "134459",
			"num": 1,
			"id": 12360
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 22870
	}, {
		"name": "Felcloth Gloves",
		"color": "0070dd",
		"id": 18407,
		"texture": 132953,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 12,
			"id": 14048
		}, {
			"name": "Felcloth",
			"color": "ffffff",
			"texture": "132888",
			"num": 20,
			"id": 14256
		}, {
			"name": "Demonic Rune",
			"color": "1eff00",
			"texture": "134417",
			"num": 6,
			"id": 12662
		}, {
			"name": "Essence of Undeath",
			"color": "1eff00",
			"texture": "136195",
			"num": 8,
			"id": 12808
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 22867
	}, {
		"name": "Felcloth Shoulders",
		"color": "1eff00",
		"id": 14112,
		"texture": 135054,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 7,
			"id": 14048
		}, {
			"name": "Felcloth",
			"color": "ffffff",
			"texture": "132888",
			"num": 3,
			"id": 14256
		}, {
			"name": "Demonic Rune",
			"color": "1eff00",
			"texture": "134417",
			"num": 2,
			"id": 12662
		}, {
			"name": "Rugged Leather",
			"color": "ffffff",
			"texture": "134251",
			"num": 4,
			"id": 8170
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 18453
	}, {
		"name": "Flarecore Gloves",
		"color": "a335ee",
		"id": 16979,
		"texture": 132960,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 8,
			"id": 14048
		}, {
			"name": "Fiery Core",
			"color": "0070dd",
			"texture": "135812",
			"num": 6,
			"id": 17010
		}, {
			"name": "Essence of Fire",
			"color": "1eff00",
			"texture": "135830",
			"num": 4,
			"id": 7078
		}, {
			"name": "Enchanted Leather",
			"color": "ffffff",
			"texture": "134418",
			"num": 2,
			"id": 12810
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 20849
	}, {
		"name": "Inferno Gloves",
		"color": "0070dd",
		"id": 18408,
		"texture": 132953,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 12,
			"id": 14048
		}, {
			"name": "Essence of Fire",
			"color": "1eff00",
			"texture": "135830",
			"num": 10,
			"id": 7078
		}, {
			"name": "Star Ruby",
			"color": "1eff00",
			"texture": "134129",
			"num": 2,
			"id": 7910
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 22868
	}, {
		"name": "Mooncloth Gloves",
		"color": "0070dd",
		"id": 18409,
		"texture": 132951,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 12,
			"id": 14048
		}, {
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 6,
			"id": 14342
		}, {
			"name": "Golden Pearl",
			"color": "1eff00",
			"texture": "134123",
			"num": 2,
			"id": 13926
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 22869
	}, {
		"name": "Robe of the Archmage",
		"color": "a335ee",
		"id": 14152,
		"texture": 132679,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 12,
			"id": 14048
		}, {
			"name": "Essence of Fire",
			"color": "1eff00",
			"texture": "135830",
			"num": 10,
			"id": 7078
		}, {
			"name": "Essence of Air",
			"color": "1eff00",
			"texture": "136022",
			"num": 10,
			"id": 7082
		}, {
			"name": "Essence of Earth",
			"color": "1eff00",
			"texture": "136102",
			"num": 10,
			"id": 7076
		}, {
			"name": "Essence of Water",
			"color": "1eff00",
			"texture": "136007",
			"num": 10,
			"id": 7080
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 18457
	}, {
		"name": "Robe of the Void",
		"color": "a335ee",
		"id": 14153,
		"texture": 132692,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 12,
			"id": 14048
		}, {
			"name": "Demonic Rune",
			"color": "1eff00",
			"texture": "134417",
			"num": 20,
			"id": 12662
		}, {
			"name": "Felcloth",
			"color": "ffffff",
			"texture": "132888",
			"num": 40,
			"id": 14256
		}, {
			"name": "Essence of Fire",
			"color": "1eff00",
			"texture": "135830",
			"num": 12,
			"id": 7078
		}, {
			"name": "Essence of Undeath",
			"color": "1eff00",
			"texture": "136195",
			"num": 12,
			"id": 12808
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 18458
	}, {
		"name": "Truefaith Vestments",
		"color": "a335ee",
		"id": 14154,
		"texture": 132672,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 12,
			"id": 14048
		}, {
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 10,
			"id": 14342
		}, {
			"name": "Righteous Orb",
			"color": "1eff00",
			"texture": "134122",
			"num": 4,
			"id": 12811
		}, {
			"name": "Golden Pearl",
			"color": "1eff00",
			"texture": "134123",
			"num": 4,
			"id": 13926
		}, {
			"name": "Ghost Dye",
			"color": "ffffff",
			"texture": "134711",
			"num": 10,
			"id": 9210
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 18456
	}, {
		"name": "Felcloth Robe",
		"color": "1eff00",
		"id": 14106,
		"texture": 132650,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 8,
			"id": 14048
		}, {
			"name": "Felcloth",
			"color": "ffffff",
			"texture": "132888",
			"num": 3,
			"id": 14256
		}, {
			"name": "Demonic Rune",
			"color": "1eff00",
			"texture": "134417",
			"num": 2,
			"id": 12662
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 18451
	}, {
		"name": "Flarecore Mantle",
		"color": "a335ee",
		"id": 16980,
		"texture": 135054,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 12,
			"id": 14048
		}, {
			"name": "Fiery Core",
			"color": "0070dd",
			"texture": "135812",
			"num": 4,
			"id": 17010
		}, {
			"name": "Lava Core",
			"color": "0070dd",
			"texture": "136025",
			"num": 4,
			"id": 17011
		}, {
			"name": "Enchanted Leather",
			"color": "ffffff",
			"texture": "134418",
			"num": 6,
			"id": 12810
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 20848
	}, {
		"name": "Mooncloth Robe",
		"color": "0070dd",
		"id": 18486,
		"texture": 132645,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 4,
			"id": 14342
		}, {
			"name": "Golden Pearl",
			"color": "1eff00",
			"texture": "134123",
			"num": 2,
			"id": 13926
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 2,
			"id": 14341
		}],
		"spellId": 22902
	}, {
		"name": "Mooncloth Shoulders",
		"color": "0070dd",
		"id": 14139,
		"texture": 135033,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 5,
			"id": 14048
		}, {
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 5,
			"id": 14342
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18448
	}, {
		"name": "Runecloth Shoulders",
		"color": "1eff00",
		"id": 13867,
		"texture": 135052,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 7,
			"id": 14048
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 14227
		}, {
			"name": "Rugged Leather",
			"color": "ffffff",
			"texture": "134251",
			"num": 4,
			"id": 8170
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18449
	}, {
		"name": "Wizardweave Turban",
		"color": "1eff00",
		"id": 14130,
		"texture": 133165,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Dream Dust",
			"color": "ffffff",
			"texture": "132855",
			"num": 4,
			"id": 11176
		}, {
			"name": "Star Ruby",
			"color": "1eff00",
			"texture": "134129",
			"num": 1,
			"id": 7910
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18450
	}, {
		"name": "Mooncloth Vest",
		"color": "0070dd",
		"id": 14138,
		"texture": 132649,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 4,
			"id": 14342
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18447
	}, {
		"name": "Wizardweave Robe",
		"color": "1eff00",
		"id": 14128,
		"texture": 132687,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 8,
			"id": 14048
		}, {
			"name": "Dream Dust",
			"color": "ffffff",
			"texture": "132855",
			"num": 2,
			"id": 11176
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18446
	}, {
		"name": "Runecloth Headband",
		"color": "1eff00",
		"id": 13866,
		"texture": 133694,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 14227
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18444
	}, {
		"name": "Argent Boots",
		"color": "0070dd",
		"id": 19056,
		"texture": 132560,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Enchanted Leather",
			"color": "ffffff",
			"texture": "134418",
			"num": 4,
			"id": 12810
		}, {
			"name": "Golden Pearl",
			"color": "1eff00",
			"texture": "134123",
			"num": 2,
			"id": 13926
		}, {
			"name": "Guardian Stone",
			"color": "1eff00",
			"texture": "135228",
			"num": 2,
			"id": 12809
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 14227
		}],
		"spellId": 23664
	}, {
		"name": "Brightcloth Pants",
		"color": "1eff00",
		"id": 14104,
		"texture": 134589,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Gold Bar",
			"color": "1eff00",
			"texture": "133217",
			"num": 4,
			"id": 3577
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 1,
			"id": 14227
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18439
	}, {
		"name": "Felcloth Hood",
		"color": "1eff00",
		"id": 14111,
		"texture": 133136,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 5,
			"id": 14048
		}, {
			"name": "Felcloth",
			"color": "ffffff",
			"texture": "132888",
			"num": 2,
			"id": 14256
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18442
	}, {
		"name": "Ghostweave Pants",
		"color": "1eff00",
		"id": 14144,
		"texture": 134581,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Ghost Dye",
			"color": "ffffff",
			"texture": "134711",
			"num": 4,
			"id": 9210
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18441
	}, {
		"name": "Mooncloth Leggings",
		"color": "0070dd",
		"id": 14137,
		"texture": 134593,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 4,
			"id": 14342
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18440
	}, {
		"name": "Wisdom of the Timbermaw",
		"color": "0070dd",
		"id": 19047,
		"texture": 132498,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 8,
			"id": 14048
		}, {
			"name": "Essence of Earth",
			"color": "1eff00",
			"texture": "136102",
			"num": 3,
			"id": 7076
		}, {
			"name": "Living Essence",
			"color": "1eff00",
			"texture": "136006",
			"num": 3,
			"id": 12803
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 14227
		}],
		"spellId": 23662
	}, {
		"name": "Felcloth Boots",
		"color": "1eff00",
		"id": 14108,
		"texture": 132539,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Felcloth",
			"color": "ffffff",
			"texture": "132888",
			"num": 2,
			"id": 14256
		}, {
			"name": "Rugged Leather",
			"color": "ffffff",
			"texture": "134251",
			"num": 4,
			"id": 8170
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18437
	}, {
		"name": "Robe of Winter Night",
		"color": "0070dd",
		"id": 14136,
		"texture": 132690,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 10,
			"id": 14048
		}, {
			"name": "Felcloth",
			"color": "ffffff",
			"texture": "132888",
			"num": 12,
			"id": 14256
		}, {
			"name": "Essence of Undeath",
			"color": "1eff00",
			"texture": "136195",
			"num": 4,
			"id": 12808
		}, {
			"name": "Essence of Water",
			"color": "1eff00",
			"texture": "136007",
			"num": 4,
			"id": 7080
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18436
	}, {
		"name": "Runecloth Pants",
		"color": "1eff00",
		"id": 13865,
		"texture": 134589,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 14227
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18438
	}, {
		"name": "Cindercloth Pants",
		"color": "1eff00",
		"id": 14045,
		"texture": 134586,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Essence of Fire",
			"color": "1eff00",
			"texture": "135830",
			"num": 1,
			"id": 7078
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18434
	}, {
		"name": "Frostweave Pants",
		"color": "1eff00",
		"id": 13871,
		"texture": 134588,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Essence of Water",
			"color": "1eff00",
			"texture": "136007",
			"num": 1,
			"id": 7080
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18424
	}, {
		"name": "Mooncloth Boots",
		"color": "0070dd",
		"id": 15802,
		"texture": 132539,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Mooncloth",
			"color": "ffffff",
			"texture": "132895",
			"num": 4,
			"id": 14342
		}, {
			"name": "Black Pearl",
			"color": "1eff00",
			"texture": "134120",
			"num": 2,
			"id": 7971
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 19435
	}, {
		"name": "Runecloth Boots",
		"color": "1eff00",
		"id": 13864,
		"texture": 132539,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 14227
		}, {
			"name": "Rugged Leather",
			"color": "ffffff",
			"texture": "134251",
			"num": 4,
			"id": 8170
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18423
	}, {
		"name": "Brightcloth Cloak",
		"color": "1eff00",
		"id": 14103,
		"texture": 133763,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Gold Bar",
			"color": "1eff00",
			"texture": "133217",
			"num": 2,
			"id": 3577
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18420
	}, {
		"name": "Cindercloth Cloak",
		"color": "1eff00",
		"id": 14044,
		"texture": 133770,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 5,
			"id": 14048
		}, {
			"name": "Essence of Fire",
			"color": "1eff00",
			"texture": "135830",
			"num": 1,
			"id": 7078
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18418
	}, {
		"name": "Cloak of Fire",
		"color": "0070dd",
		"id": 14134,
		"texture": 133770,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Essence of Fire",
			"color": "1eff00",
			"texture": "135830",
			"num": 4,
			"id": 7078
		}, {
			"name": "Heart of Fire",
			"color": "ffffff",
			"texture": "135819",
			"num": 4,
			"id": 7077
		}, {
			"name": "Elemental Fire",
			"color": "ffffff",
			"texture": "135805",
			"num": 4,
			"id": 7068
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18422
	}, {
		"name": "Felcloth Pants",
		"color": "1eff00",
		"id": 14107,
		"texture": 134586,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 5,
			"id": 14048
		}, {
			"name": "Felcloth",
			"color": "ffffff",
			"texture": "132888",
			"num": 2,
			"id": 14256
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18419
	}, {
		"name": "Ghostweave Vest",
		"color": "1eff00",
		"id": 14141,
		"texture": 135012,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Ghost Dye",
			"color": "ffffff",
			"texture": "134711",
			"num": 4,
			"id": 9210
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 1,
			"id": 14227
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18416
	}, {
		"name": "Runecloth Gloves",
		"color": "1eff00",
		"id": 13863,
		"texture": 132959,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Rugged Leather",
			"color": "ffffff",
			"texture": "134251",
			"num": 4,
			"id": 8170
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18417
	}, {
		"name": "Wizardweave Leggings",
		"color": "1eff00",
		"id": 14132,
		"texture": 134589,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 6,
			"id": 14048
		}, {
			"name": "Dream Dust",
			"color": "ffffff",
			"texture": "132855",
			"num": 1,
			"id": 11176
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18421
	}, {
		"name": "Brightcloth Gloves",
		"color": "1eff00",
		"id": 14101,
		"texture": 132955,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Gold Bar",
			"color": "1eff00",
			"texture": "133217",
			"num": 2,
			"id": 3577
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18415
	}, {
		"name": "Brightcloth Robe",
		"color": "1eff00",
		"id": 14100,
		"texture": 132667,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 5,
			"id": 14048
		}, {
			"name": "Gold Bar",
			"color": "1eff00",
			"texture": "133217",
			"num": 2,
			"id": 3577
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18414
	}, {
		"name": "Ghostweave Gloves",
		"color": "1eff00",
		"id": 14142,
		"texture": 132939,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Ghost Dye",
			"color": "ffffff",
			"texture": "134711",
			"num": 2,
			"id": 9210
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 1,
			"id": 14227
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18413
	}, {
		"name": "Frostweave Gloves",
		"color": "1eff00",
		"id": 13870,
		"texture": 132939,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 3,
			"id": 14048
		}, {
			"name": "Essence of Water",
			"color": "1eff00",
			"texture": "136007",
			"num": 1,
			"id": 7080
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18411
	}, {
		"name": "Ghostweave Belt",
		"color": "1eff00",
		"id": 14143,
		"texture": 132505,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 3,
			"id": 14048
		}, {
			"name": "Ghost Dye",
			"color": "ffffff",
			"texture": "134711",
			"num": 2,
			"id": 9210
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 1,
			"id": 14227
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18410
	}, {
		"name": "Runecloth Cloak",
		"color": "1eff00",
		"id": 13860,
		"texture": 133762,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 1,
			"id": 14227
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18409
	}, {
		"name": "Cindercloth Vest",
		"color": "1eff00",
		"id": 14042,
		"texture": 132648,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 5,
			"id": 14048
		}, {
			"name": "Heart of Fire",
			"color": "ffffff",
			"texture": "135819",
			"num": 2,
			"id": 7077
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18408
	}, {
		"name": "Runecloth Robe",
		"color": "1eff00",
		"id": 13858,
		"texture": 132645,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 5,
			"id": 14048
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 1,
			"id": 14227
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18406
	}, {
		"name": "Runecloth Tunic",
		"color": "1eff00",
		"id": 13857,
		"texture": 132645,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 5,
			"id": 14048
		}, {
			"name": "Ironweb Spider Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 1,
			"id": 14227
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18407
	}, {
		"name": "Frostweave Robe",
		"color": "1eff00",
		"id": 13868,
		"texture": 132644,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 5,
			"id": 14048
		}, {
			"name": "Globe of Water",
			"color": "ffffff",
			"texture": "134333",
			"num": 2,
			"id": 7079
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18404
	}, {
		"name": "Frostweave Tunic",
		"color": "1eff00",
		"id": 13869,
		"texture": 132649,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 5,
			"id": 14048
		}, {
			"name": "Globe of Water",
			"color": "ffffff",
			"texture": "134333",
			"num": 2,
			"id": 7079
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18403
	}, {
		"name": "Runecloth Belt",
		"color": "1eff00",
		"id": 13856,
		"texture": 132504,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 3,
			"id": 14048
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 18402
	}, {
		"name": "Dreamweave Circlet",
		"color": "0070dd",
		"id": 10041,
		"texture": 132767,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 8,
			"id": 4339
		}, {
			"name": "Wildvine",
			"color": "ffffff",
			"texture": "134183",
			"num": 4,
			"id": 8153
		}, {
			"name": "Heart of the Wild",
			"color": "ffffff",
			"texture": "134188",
			"num": 2,
			"id": 10286
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 3,
			"id": 8343
		}, {
			"name": "Truesilver Bar",
			"color": "1eff00",
			"texture": "133222",
			"num": 1,
			"id": 6037
		}, {
			"name": "Jade",
			"color": "1eff00",
			"texture": "134134",
			"num": 1,
			"id": 1529
		}],
		"spellId": 12092
	}, {
		"name": "Cindercloth Boots",
		"color": "1eff00",
		"id": 10044,
		"texture": 132539,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 5,
			"id": 4339
		}, {
			"name": "Heart of Fire",
			"color": "ffffff",
			"texture": "135819",
			"num": 1,
			"id": 7077
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 3,
			"id": 8343
		}, {
			"name": "Thick Leather",
			"color": "ffffff",
			"texture": "134257",
			"num": 2,
			"id": 4304
		}],
		"spellId": 12088
	}, {
		"name": "Shadoweave Mask",
		"color": "1eff00",
		"id": 10025,
		"texture": 133129,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 2,
			"id": 4339
		}, {
			"name": "Shadow Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 8,
			"id": 10285
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12086
	}, {
		"name": "Admiral's Hat",
		"color": "1eff00",
		"id": 10030,
		"texture": 133131,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 3,
			"id": 4339
		}, {
			"name": "Long Elegant Feather",
			"color": "ffffff",
			"texture": "135992",
			"num": 6,
			"id": 4589
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12081
	}, {
		"name": "Red Mageweave Headband",
		"color": "1eff00",
		"id": 10033,
		"texture": 133694,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 4,
			"id": 4339
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12084
	}, {
		"name": "Shadoweave Boots",
		"color": "1eff00",
		"id": 10031,
		"texture": 132539,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 6,
			"id": 4339
		}, {
			"name": "Shadow Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 6,
			"id": 10285
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 3,
			"id": 8343
		}, {
			"name": "Thick Leather",
			"color": "ffffff",
			"texture": "134257",
			"num": 2,
			"id": 4304
		}],
		"spellId": 12082
	}, {
		"name": "Red Mageweave Shoulders",
		"color": "1eff00",
		"id": 10029,
		"texture": 135054,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 4,
			"id": 4339
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 3,
			"id": 8343
		}],
		"spellId": 12078
	}, {
		"name": "Shadoweave Shoulders",
		"color": "1eff00",
		"id": 10028,
		"texture": 135056,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 5,
			"id": 4339
		}, {
			"name": "Shadow Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 10285
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12076
	}, {
		"name": "Black Mageweave Boots",
		"color": "1eff00",
		"id": 10026,
		"texture": 132539,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 3,
			"id": 4339
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}, {
			"name": "Thick Leather",
			"color": "ffffff",
			"texture": "134257",
			"num": 2,
			"id": 4304
		}],
		"spellId": 12073
	}, {
		"name": "Black Mageweave Headband",
		"color": "1eff00",
		"id": 10024,
		"texture": 133693,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 3,
			"id": 4339
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12072
	}, {
		"name": "Black Mageweave Shoulders",
		"color": "1eff00",
		"id": 10027,
		"texture": 135056,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 3,
			"id": 4339
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12074
	}, {
		"name": "Cindercloth Robe",
		"color": "1eff00",
		"id": 10042,
		"texture": 132666,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 5,
			"id": 4339
		}, {
			"name": "Heart of Fire",
			"color": "ffffff",
			"texture": "135819",
			"num": 2,
			"id": 7077
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12069
	}, {
		"name": "Dreamweave Gloves",
		"color": "0070dd",
		"id": 10019,
		"texture": 132952,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 4,
			"id": 4339
		}, {
			"name": "Wildvine",
			"color": "ffffff",
			"texture": "134183",
			"num": 4,
			"id": 8153
		}, {
			"name": "Heart of the Wild",
			"color": "ffffff",
			"texture": "134188",
			"num": 2,
			"id": 10286
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12067
	}, {
		"name": "Dreamweave Vest",
		"color": "0070dd",
		"id": 10021,
		"texture": 132683,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 6,
			"id": 4339
		}, {
			"name": "Wildvine",
			"color": "ffffff",
			"texture": "134183",
			"num": 6,
			"id": 8153
		}, {
			"name": "Heart of the Wild",
			"color": "ffffff",
			"texture": "134188",
			"num": 2,
			"id": 10286
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12070
	}, {
		"name": "Red Mageweave Gloves",
		"color": "1eff00",
		"id": 10018,
		"texture": 132953,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 3,
			"id": 4339
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12066
	}, {
		"name": "Shadoweave Gloves",
		"color": "1eff00",
		"id": 10023,
		"texture": 132943,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 5,
			"id": 4339
		}, {
			"name": "Shadow Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 5,
			"id": 10285
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12071
	}, {
		"name": "Black Mageweave Gloves",
		"color": "1eff00",
		"id": 10003,
		"texture": 132939,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 2,
			"id": 4339
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12053
	}, {
		"name": "Red Mageweave Pants",
		"color": "1eff00",
		"id": 10009,
		"texture": 134586,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 3,
			"id": 4339
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 8343
		}],
		"spellId": 12060
	}, {
		"name": "Red Mageweave Vest",
		"color": "1eff00",
		"id": 10007,
		"texture": 135013,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 3,
			"id": 4339
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 8343
		}],
		"spellId": 12056
	}, {
		"name": "Shadoweave Robe",
		"color": "1eff00",
		"id": 10004,
		"texture": 132679,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 3,
			"id": 4339
		}, {
			"name": "Shadow Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 10285
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 8343
		}],
		"spellId": 12055
	}, {
		"name": "White Bandit Mask",
		"color": "1eff00",
		"id": 10008,
		"texture": 133763,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 1,
			"id": 4339
		}, {
			"name": "Bleach",
			"color": "ffffff",
			"texture": "132799",
			"num": 1,
			"id": 2324
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 8343
		}],
		"spellId": 12059
	}, {
		"name": "Black Mageweave Robe",
		"color": "1eff00",
		"id": 10001,
		"texture": 132654,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 3,
			"id": 4339
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 8343
		}],
		"spellId": 12050
	}, {
		"name": "Crimson Silk Gloves",
		"color": "1eff00",
		"id": 7064,
		"texture": 132939,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 6,
			"id": 4305
		}, {
			"name": "Elemental Fire",
			"color": "ffffff",
			"texture": "135805",
			"num": 2,
			"id": 7068
		}, {
			"name": "Fire Oil",
			"color": "ffffff",
			"texture": "134818",
			"num": 2,
			"id": 6371
		}, {
			"name": "Thick Leather",
			"color": "ffffff",
			"texture": "134257",
			"num": 2,
			"id": 4304
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 4,
			"id": 2604
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 4291
		}],
		"spellId": 8804
	}, {
		"name": "Shadoweave Pants",
		"color": "1eff00",
		"id": 10002,
		"texture": 134591,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 3,
			"id": 4339
		}, {
			"name": "Shadow Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 10285
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 8343
		}],
		"spellId": 12052
	}, {
		"name": "Black Mageweave Leggings",
		"color": "1eff00",
		"id": 9999,
		"texture": 134589,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 2,
			"id": 4339
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 3,
			"id": 4291
		}],
		"spellId": 12049
	}, {
		"name": "Black Mageweave Vest",
		"color": "1eff00",
		"id": 9998,
		"texture": 132718,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 2,
			"id": 4339
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 3,
			"id": 4291
		}],
		"spellId": 12048
	}, {
		"name": "Icy Cloak",
		"color": "0070dd",
		"id": 4327,
		"texture": 133756,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 3,
			"id": 4339
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 4291
		}, {
			"name": "Frost Oil",
			"color": "ffffff",
			"texture": "134800",
			"num": 1,
			"id": 3829
		}, {
			"name": "Thick Spider's Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 4337
		}],
		"spellId": 3862
	}, {
		"name": "Star Belt",
		"color": "1eff00",
		"id": 4329,
		"texture": 132495,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 4,
			"id": 4339
		}, {
			"name": "Heavy Leather",
			"color": "ffffff",
			"texture": "134256",
			"num": 4,
			"id": 4234
		}, {
			"name": "Citrine",
			"color": "1eff00",
			"texture": "134117",
			"num": 1,
			"id": 3864
		}, {
			"name": "Iron Buckle",
			"color": "ffffff",
			"texture": "133607",
			"num": 1,
			"id": 7071
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 4291
		}],
		"spellId": 3864
	}, {
		"name": "Crimson Silk Pantaloons",
		"color": "ffffff",
		"id": 7062,
		"texture": 134586,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 4,
			"id": 4305
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 4291
		}],
		"spellId": 8799
	}, {
		"name": "Earthen Silk Belt",
		"color": "1eff00",
		"id": 7061,
		"texture": 132513,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 5,
			"id": 4305
		}, {
			"name": "Elemental Earth",
			"color": "ffffff",
			"texture": "134572",
			"num": 4,
			"id": 7067
		}, {
			"name": "Heavy Leather",
			"color": "ffffff",
			"texture": "134256",
			"num": 4,
			"id": 4234
		}, {
			"name": "Iron Buckle",
			"color": "ffffff",
			"texture": "133607",
			"num": 1,
			"id": 7071
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 4291
		}],
		"spellId": 8797
	}, {
		"name": "Azure Shoulders",
		"color": "1eff00",
		"id": 7060,
		"texture": 135058,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 6,
			"id": 4305
		}, {
			"name": "Naga Scale",
			"color": "ffffff",
			"texture": "134303",
			"num": 2,
			"id": 7072
		}, {
			"name": "Blue Dye",
			"color": "ffffff",
			"texture": "134776",
			"num": 2,
			"id": 6260
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 4291
		}],
		"spellId": 8795
	}, {
		"name": "Crimson Silk Shoulders",
		"color": "1eff00",
		"id": 7059,
		"texture": 135054,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 5,
			"id": 4305
		}, {
			"name": "Fire Oil",
			"color": "ffffff",
			"texture": "134818",
			"num": 2,
			"id": 6371
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 4291
		}],
		"spellId": 8793
	}, {
		"name": "Robe of Power",
		"color": "0070dd",
		"id": 7054,
		"texture": 132643,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 2,
			"id": 4339
		}, {
			"name": "Elemental Earth",
			"color": "ffffff",
			"texture": "134572",
			"num": 2,
			"id": 7067
		}, {
			"name": "Elemental Water",
			"color": "ffffff",
			"texture": "134714",
			"num": 2,
			"id": 7070
		}, {
			"name": "Elemental Fire",
			"color": "ffffff",
			"texture": "135805",
			"num": 2,
			"id": 7068
		}, {
			"name": "Elemental Air",
			"color": "ffffff",
			"texture": "136107",
			"num": 2,
			"id": 7069
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 4291
		}],
		"spellId": 8770
	}, {
		"name": "Crimson Silk Vest",
		"color": "ffffff",
		"id": 7058,
		"texture": 135008,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 4,
			"id": 4305
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}],
		"spellId": 8791
	}, {
		"name": "Long Silken Cloak",
		"color": "1eff00",
		"id": 4326,
		"texture": 133754,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 4,
			"id": 4305
		}, {
			"name": "Mana Potion",
			"color": "ffffff",
			"texture": "134852",
			"num": 1,
			"id": 3827
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 4291
		}],
		"spellId": 3861
	}, {
		"name": "Crimson Silk Cloak",
		"color": "1eff00",
		"id": 7056,
		"texture": 132657,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 5,
			"id": 4305
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Fire Oil",
			"color": "ffffff",
			"texture": "134818",
			"num": 2,
			"id": 6371
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 4291
		}],
		"spellId": 8789
	}, {
		"name": "Green Silken Shoulders",
		"color": "1eff00",
		"id": 7057,
		"texture": 135049,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 5,
			"id": 4305
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 4291
		}],
		"spellId": 8774
	}, {
		"name": "Spider Belt",
		"color": "1eff00",
		"id": 4328,
		"texture": 132514,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 4,
			"id": 4305
		}, {
			"name": "Thick Spider's Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 4337
		}, {
			"name": "Iron Buckle",
			"color": "ffffff",
			"texture": "133607",
			"num": 1,
			"id": 7071
		}],
		"spellId": 3863
	}, {
		"name": "Azure Silk Belt",
		"color": "1eff00",
		"id": 7052,
		"texture": 132511,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 4,
			"id": 4305
		}, {
			"name": "Elemental Water",
			"color": "ffffff",
			"texture": "134714",
			"num": 1,
			"id": 7070
		}, {
			"name": "Blue Dye",
			"color": "ffffff",
			"texture": "134776",
			"num": 2,
			"id": 6260
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}, {
			"name": "Iron Buckle",
			"color": "ffffff",
			"texture": "133607",
			"num": 1,
			"id": 7071
		}],
		"spellId": 8766
	}, {
		"name": "Azure Silk Cloak",
		"color": "1eff00",
		"id": 7053,
		"texture": 132655,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 3,
			"id": 4305
		}, {
			"name": "Blue Dye",
			"color": "ffffff",
			"texture": "134776",
			"num": 2,
			"id": 6260
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}],
		"spellId": 8786
	}, {
		"name": "Boots of the Enchanter",
		"color": "1eff00",
		"id": 4325,
		"texture": 132539,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 4,
			"id": 4305
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 4291
		}, {
			"name": "Thick Spider's Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 4337
		}],
		"spellId": 3860
	}, {
		"name": "Crimson Silk Belt",
		"color": "1eff00",
		"id": 7055,
		"texture": 132493,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 4,
			"id": 4305
		}, {
			"name": "Iron Buckle",
			"color": "ffffff",
			"texture": "133607",
			"num": 1,
			"id": 7071
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 4291
		}],
		"spellId": 8772
	}, {
		"name": "Tuxedo Pants",
		"color": "ffffff",
		"id": 10035,
		"texture": 134581,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 4,
			"id": 4339
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 3,
			"id": 8343
		}],
		"spellId": 12089
	}, {
		"name": "White Wedding Dress",
		"color": "ffffff",
		"id": 10040,
		"texture": 132645,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 5,
			"id": 4339
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 3,
			"id": 8343
		}, {
			"name": "Bleach",
			"color": "ffffff",
			"texture": "132799",
			"num": 1,
			"id": 2324
		}],
		"spellId": 12091
	}, {
		"name": "Earthen Vest",
		"color": "1eff00",
		"id": 7051,
		"texture": 135008,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 3,
			"id": 4305
		}, {
			"name": "Elemental Earth",
			"color": "ffffff",
			"texture": "134572",
			"num": 1,
			"id": 7067
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}],
		"spellId": 8764
	}, {
		"name": "Shadow Hood",
		"color": "1eff00",
		"id": 4323,
		"texture": 133129,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 4,
			"id": 4305
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 4291
		}, {
			"name": "Shadow Oil",
			"color": "ffffff",
			"texture": "134803",
			"num": 1,
			"id": 3824
		}],
		"spellId": 3858
	}, {
		"name": "Enchanter's Cowl",
		"color": "1eff00",
		"id": 4322,
		"texture": 133133,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 3,
			"id": 4305
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}, {
			"name": "Thick Spider's Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 4337
		}],
		"spellId": 3857
	}, {
		"name": "Green Silk Armor",
		"color": "1eff00",
		"id": 7065,
		"texture": 132647,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 5,
			"id": 4305
		}, {
			"name": "Green Dye",
			"color": "ffffff",
			"texture": "134743",
			"num": 2,
			"id": 2605
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 4291
		}],
		"spellId": 8784
	}, {
		"name": "Silk Headband",
		"color": "ffffff",
		"id": 7050,
		"texture": 133693,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 3,
			"id": 4305
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}],
		"spellId": 8762
	}, {
		"name": "Azure Silk Vest",
		"color": "1eff00",
		"id": 4324,
		"texture": 132678,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 5,
			"id": 4305
		}, {
			"name": "Blue Dye",
			"color": "ffffff",
			"texture": "134776",
			"num": 4,
			"id": 6260
		}],
		"spellId": 3859
	}, {
		"name": "Robes of Arcana",
		"color": "1eff00",
		"id": 5770,
		"texture": 132670,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 4,
			"id": 4305
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}, {
			"name": "Spider's Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 3182
		}],
		"spellId": 6692
	}, {
		"name": "Truefaith Gloves",
		"color": "1eff00",
		"id": 7049,
		"texture": 132950,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 3,
			"id": 4305
		}, {
			"name": "Heavy Leather",
			"color": "ffffff",
			"texture": "134256",
			"num": 2,
			"id": 4234
		}, {
			"name": "Healing Potion",
			"color": "ffffff",
			"texture": "134831",
			"num": 4,
			"id": 929
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 8782
	}, {
		"name": "Azure Silk Gloves",
		"color": "1eff00",
		"id": 4319,
		"texture": 132951,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 3,
			"id": 4305
		}, {
			"name": "Heavy Leather",
			"color": "ffffff",
			"texture": "134256",
			"num": 2,
			"id": 4234
		}, {
			"name": "Blue Dye",
			"color": "ffffff",
			"texture": "134776",
			"num": 2,
			"id": 6260
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}],
		"spellId": 3854
	}, {
		"name": "Azure Silk Hood",
		"color": "ffffff",
		"id": 7048,
		"texture": 133131,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 2,
			"id": 4305
		}, {
			"name": "Blue Dye",
			"color": "ffffff",
			"texture": "134776",
			"num": 2,
			"id": 6260
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 8760
	}, {
		"name": "Hands of Darkness",
		"color": "1eff00",
		"id": 7047,
		"texture": 132956,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 3,
			"id": 4305
		}, {
			"name": "Heavy Leather",
			"color": "ffffff",
			"texture": "134256",
			"num": 2,
			"id": 4234
		}, {
			"name": "Shadow Protection Potion",
			"color": "ffffff",
			"texture": "134824",
			"num": 2,
			"id": 6048
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}],
		"spellId": 8780
	}, {
		"name": "Azure Silk Pants",
		"color": "1eff00",
		"id": 7046,
		"texture": 134588,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 4,
			"id": 4305
		}, {
			"name": "Blue Dye",
			"color": "ffffff",
			"texture": "134776",
			"num": 2,
			"id": 6260
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 3,
			"id": 2321
		}],
		"spellId": 8758
	}, {
		"name": "Spider Silk Slippers",
		"color": "1eff00",
		"id": 4321,
		"texture": 132537,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 3,
			"id": 4305
		}, {
			"name": "Spider's Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 1,
			"id": 3182
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}],
		"spellId": 3856
	}, {
		"name": "Lesser Wizard's Robe",
		"color": "1eff00",
		"id": 5766,
		"texture": 132658,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 2,
			"id": 4305
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}, {
			"name": "Spider's Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 2,
			"id": 3182
		}],
		"spellId": 6690
	}, {
		"name": "Gloves of Meditation",
		"color": "1eff00",
		"id": 4318,
		"texture": 132939,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 4,
			"id": 2997
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 3,
			"id": 2321
		}, {
			"name": "Elixir of Wisdom",
			"color": "ffffff",
			"texture": "134717",
			"num": 1,
			"id": 3383
		}],
		"spellId": 3852
	}, {
		"name": "Phoenix Gloves",
		"color": "1eff00",
		"id": 4331,
		"texture": 132953,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 4,
			"id": 2997
		}, {
			"name": "Iridescent Pearl",
			"color": "1eff00",
			"texture": "134121",
			"num": 1,
			"id": 5500
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 4,
			"id": 2321
		}, {
			"name": "Bleach",
			"color": "ffffff",
			"texture": "132799",
			"num": 2,
			"id": 2324
		}],
		"spellId": 3868
	}, {
		"name": "Phoenix Pants",
		"color": "1eff00",
		"id": 4317,
		"texture": 134586,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 6,
			"id": 2997
		}, {
			"name": "Iridescent Pearl",
			"color": "1eff00",
			"texture": "134121",
			"num": 1,
			"id": 5500
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 3,
			"id": 2321
		}],
		"spellId": 3851
	}, {
		"name": "Spidersilk Boots",
		"color": "0070dd",
		"id": 4320,
		"texture": 132539,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 2,
			"id": 4305
		}, {
			"name": "Medium Leather",
			"color": "ffffff",
			"texture": "134254",
			"num": 4,
			"id": 2319
		}, {
			"name": "Spider's Silk",
			"color": "ffffff",
			"texture": "136113",
			"num": 4,
			"id": 3182
		}, {
			"name": "Iridescent Pearl",
			"color": "1eff00",
			"texture": "134121",
			"num": 2,
			"id": 5500
		}],
		"spellId": 3855
	}, {
		"name": "Colorful Kilt",
		"color": "1eff00",
		"id": 10048,
		"texture": 134582,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 5,
			"id": 2997
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 3,
			"id": 2604
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 12047
	}, {
		"name": "Reinforced Woolen Shoulders",
		"color": "ffffff",
		"id": 4315,
		"texture": 135040,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 6,
			"id": 2997
		}, {
			"name": "Medium Leather",
			"color": "ffffff",
			"texture": "134254",
			"num": 2,
			"id": 2319
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}],
		"spellId": 3849
	}, {
		"name": "Double-stitched Woolen Shoulders",
		"color": "ffffff",
		"id": 4314,
		"texture": 135037,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 3,
			"id": 2997
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}],
		"spellId": 3848
	}, {
		"name": "Heavy Woolen Pants",
		"color": "1eff00",
		"id": 4316,
		"texture": 134581,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 5,
			"id": 2997
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 4,
			"id": 2321
		}],
		"spellId": 3850
	}, {
		"name": "White Woolen Dress",
		"color": "ffffff",
		"id": 6787,
		"texture": 135016,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 3,
			"id": 2997
		}, {
			"name": "Bleach",
			"color": "ffffff",
			"texture": "132799",
			"num": 4,
			"id": 2324
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 8467
	}, {
		"name": "Gray Woolen Robe",
		"color": "1eff00",
		"id": 2585,
		"texture": 132654,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 4,
			"id": 2997
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 3,
			"id": 2321
		}, {
			"name": "Gray Dye",
			"color": "ffffff",
			"texture": "132797",
			"num": 1,
			"id": 4340
		}],
		"spellId": 2403
	}, {
		"name": "Heavy Woolen Cloak",
		"color": "1eff00",
		"id": 4311,
		"texture": 133766,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 3,
			"id": 2997
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}, {
			"name": "Small Lustrous Pearl",
			"color": "1eff00",
			"texture": "134122",
			"num": 2,
			"id": 5498
		}],
		"spellId": 3844
	}, {
		"name": "Blue Overalls",
		"color": "1eff00",
		"id": 6263,
		"texture": 135017,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 4,
			"id": 2997
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}, {
			"name": "Blue Dye",
			"color": "ffffff",
			"texture": "134776",
			"num": 2,
			"id": 6260
		}],
		"spellId": 7639
	}, {
		"name": "Red Woolen Boots",
		"color": "1eff00",
		"id": 4313,
		"texture": 132543,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 4,
			"id": 2997
		}, {
			"name": "Light Leather",
			"color": "ffffff",
			"texture": "134252",
			"num": 2,
			"id": 2318
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}],
		"spellId": 3847
	}, {
		"name": "Pearl-clasped Cloak",
		"color": "1eff00",
		"id": 5542,
		"texture": 133763,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 3,
			"id": 2997
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}, {
			"name": "Small Lustrous Pearl",
			"color": "1eff00",
			"texture": "134122",
			"num": 1,
			"id": 5498
		}],
		"spellId": 6521
	}, {
		"name": "Woolen Boots",
		"color": "1eff00",
		"id": 2583,
		"texture": 132543,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 4,
			"id": 2997
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}, {
			"name": "Light Leather",
			"color": "ffffff",
			"texture": "134252",
			"num": 2,
			"id": 2318
		}],
		"spellId": 2401
	}, {
		"name": "Green Woolen Vest",
		"color": "ffffff",
		"id": 2582,
		"texture": 132680,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 2,
			"id": 2997
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}, {
			"name": "Green Dye",
			"color": "ffffff",
			"texture": "134743",
			"num": 1,
			"id": 2605
		}],
		"spellId": 2399
	}, {
		"name": "Heavy Woolen Gloves",
		"color": "1eff00",
		"id": 4310,
		"texture": 132939,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 3,
			"id": 2997
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 3843
	}, {
		"name": "Soft-soled Linen Boots",
		"color": "1eff00",
		"id": 4312,
		"texture": 132543,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 5,
			"id": 2996
		}, {
			"name": "Light Leather",
			"color": "ffffff",
			"texture": "134252",
			"num": 2,
			"id": 2318
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 3845
	}, {
		"name": "Woolen Cape",
		"color": "ffffff",
		"id": 2584,
		"texture": 133762,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 1,
			"id": 2997
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 2402
	}, {
		"name": "Simple Kilt",
		"color": "ffffff",
		"id": 10047,
		"texture": 134591,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 4,
			"id": 2996
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 12046
	}, {
		"name": "Barbaric Linen Vest",
		"color": "1eff00",
		"id": 2578,
		"texture": 132715,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 4,
			"id": 2996
		}, {
			"name": "Light Leather",
			"color": "ffffff",
			"texture": "134252",
			"num": 1,
			"id": 2318
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 2395
	}, {
		"name": "Handstitched Linen Britches",
		"color": "1eff00",
		"id": 4309,
		"texture": 134587,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 4,
			"id": 2996
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 2,
			"id": 2321
		}],
		"spellId": 3842
	}, {
		"name": "Linen Boots",
		"color": "ffffff",
		"id": 2569,
		"texture": 132543,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 3,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}, {
			"name": "Light Leather",
			"color": "ffffff",
			"texture": "134252",
			"num": 1,
			"id": 2318
		}],
		"spellId": 2386
	}, {
		"name": "Blue Linen Vest",
		"color": "1eff00",
		"id": 6240,
		"texture": 132678,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 3,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}, {
			"name": "Blue Dye",
			"color": "ffffff",
			"texture": "134776",
			"num": 1,
			"id": 6260
		}],
		"spellId": 7630
	}, {
		"name": "Green Linen Bracers",
		"color": "ffffff",
		"id": 4308,
		"texture": 132611,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 3,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 2,
			"id": 2320
		}, {
			"name": "Green Dye",
			"color": "ffffff",
			"texture": "134743",
			"num": 1,
			"id": 2605
		}],
		"spellId": 3841
	}, {
		"name": "Red Linen Vest",
		"color": "1eff00",
		"id": 6239,
		"texture": 132681,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 3,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 1,
			"id": 2604
		}],
		"spellId": 7629
	}, {
		"name": "Reinforced Linen Cape",
		"color": "ffffff",
		"id": 2580,
		"texture": 133759,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 2,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 3,
			"id": 2320
		}],
		"spellId": 2397
	}, {
		"name": "Brown Linen Pants",
		"color": "ffffff",
		"id": 4343,
		"texture": 134586,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 2,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}],
		"spellId": 3914
	}, {
		"name": "Brown Linen Robe",
		"color": "1eff00",
		"id": 6238,
		"texture": 132662,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 3,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}],
		"spellId": 7623
	}, {
		"name": "Heavy Linen Gloves",
		"color": "ffffff",
		"id": 4307,
		"texture": 132939,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 2,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}],
		"spellId": 3840
	}, {
		"name": "Red Linen Robe",
		"color": "1eff00",
		"id": 2572,
		"texture": 132659,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 3,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 2,
			"id": 2320
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}],
		"spellId": 2389
	}, {
		"name": "White Linen Robe",
		"color": "1eff00",
		"id": 6241,
		"texture": 132645,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 3,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}, {
			"name": "Bleach",
			"color": "ffffff",
			"texture": "132799",
			"num": 1,
			"id": 2324
		}],
		"spellId": 7624
	}, {
		"name": "Linen Belt",
		"color": "ffffff",
		"id": 7026,
		"texture": 132494,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 1,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}],
		"spellId": 8776
	}, {
		"name": "Simple Linen Boots",
		"color": "ffffff",
		"id": 10046,
		"texture": 132539,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 2,
			"id": 2996
		}, {
			"name": "Light Leather",
			"color": "ffffff",
			"texture": "134252",
			"num": 1,
			"id": 2318
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}],
		"spellId": 12045
	}, {
		"name": "Brown Linen Vest",
		"color": "ffffff",
		"id": 2568,
		"texture": 135009,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 1,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}],
		"spellId": 2385
	}, {
		"name": "Simple Linen Pants",
		"color": "ffffff",
		"id": 10045,
		"texture": 134591,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 1,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}],
		"spellId": 12044
	}, {
		"name": "Linen Cloak",
		"color": "ffffff",
		"id": 2570,
		"texture": 133766,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 1,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}],
		"spellId": 2387
	}, {
		"name": "Festival Dress",
		"color": "ffffff",
		"id": 21154,
		"texture": 132697,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Firebloom",
			"color": "ffffff",
			"texture": "134200",
			"num": 2,
			"id": 4625
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 26403
	}, {
		"name": "Tuxedo Jacket",
		"color": "ffffff",
		"id": 10036,
		"texture": 135022,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 5,
			"id": 4339
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 3,
			"id": 8343
		}],
		"spellId": 12093
	}, {
		"name": "Pink Mageweave Shirt",
		"color": "ffffff",
		"id": 10055,
		"texture": 135029,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 3,
			"id": 4339
		}, {
			"name": "Pink Dye",
			"color": "ffffff",
			"texture": "134720",
			"num": 1,
			"id": 10290
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 8343
		}],
		"spellId": 12080
	}, {
		"name": "Simple Black Dress",
		"color": "ffffff",
		"id": 10053,
		"texture": 132662,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 3,
			"id": 4339
		}, {
			"name": "Black Dye",
			"color": "ffffff",
			"texture": "134843",
			"num": 1,
			"id": 2325
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 8343
		}, {
			"name": "Bleach",
			"color": "ffffff",
			"texture": "132799",
			"num": 1,
			"id": 2324
		}],
		"spellId": 12077
	}, {
		"name": "Lavender Mageweave Shirt",
		"color": "ffffff",
		"id": 10054,
		"texture": 135028,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 2,
			"id": 4339
		}, {
			"name": "Purple Dye",
			"color": "ffffff",
			"texture": "134713",
			"num": 2,
			"id": 4342
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12075
	}, {
		"name": "Orange Mageweave Shirt",
		"color": "ffffff",
		"id": 10056,
		"texture": 135027,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 1,
			"id": 4339
		}, {
			"name": "Orange Dye",
			"color": "ffffff",
			"texture": "134815",
			"num": 1,
			"id": 6261
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 8343
		}],
		"spellId": 12061
	}, {
		"name": "Black Swashbuckler's Shirt",
		"color": "ffffff",
		"id": 4336,
		"texture": 135022,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 5,
			"id": 4305
		}, {
			"name": "Black Dye",
			"color": "ffffff",
			"texture": "134843",
			"num": 1,
			"id": 2325
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 4291
		}],
		"spellId": 3873
	}, {
		"name": "Orange Martial Shirt",
		"color": "ffffff",
		"id": 10052,
		"texture": 135027,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 2,
			"id": 4339
		}, {
			"name": "Orange Dye",
			"color": "ffffff",
			"texture": "134815",
			"num": 2,
			"id": 6261
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 8343
		}],
		"spellId": 12064
	}, {
		"name": "Red Swashbuckler's Shirt",
		"color": "ffffff",
		"id": 6796,
		"texture": 135029,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 3,
			"id": 4305
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 4291
		}],
		"spellId": 8489
	}, {
		"name": "Formal White Shirt",
		"color": "ffffff",
		"id": 4334,
		"texture": 135012,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 3,
			"id": 4305
		}, {
			"name": "Bleach",
			"color": "ffffff",
			"texture": "132799",
			"num": 2,
			"id": 2324
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 3871
	}, {
		"name": "White Swashbuckler's Shirt",
		"color": "ffffff",
		"id": 6795,
		"texture": 135030,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 3,
			"id": 4305
		}, {
			"name": "Bleach",
			"color": "ffffff",
			"texture": "132799",
			"num": 2,
			"id": 2324
		}, {
			"name": "Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 1,
			"id": 4291
		}],
		"spellId": 8483
	}, {
		"name": "Dark Silk Shirt",
		"color": "ffffff",
		"id": 4333,
		"texture": 135022,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Silk Cloth",
			"color": "ffffff",
			"texture": "132907",
			"num": 2,
			"id": 4305
		}, {
			"name": "Gray Dye",
			"color": "ffffff",
			"texture": "132797",
			"num": 2,
			"id": 4340
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 3870
	}, {
		"name": "Stylish Blue Shirt",
		"color": "ffffff",
		"id": 6384,
		"texture": 135023,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 4,
			"id": 2997
		}, {
			"name": "Blue Dye",
			"color": "ffffff",
			"texture": "134776",
			"num": 2,
			"id": 6260
		}, {
			"name": "Gray Dye",
			"color": "ffffff",
			"texture": "132797",
			"num": 1,
			"id": 4340
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 7892
	}, {
		"name": "Stylish Green Shirt",
		"color": "ffffff",
		"id": 6385,
		"texture": 135024,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 4,
			"id": 2997
		}, {
			"name": "Green Dye",
			"color": "ffffff",
			"texture": "134743",
			"num": 2,
			"id": 2605
		}, {
			"name": "Gray Dye",
			"color": "ffffff",
			"texture": "132797",
			"num": 1,
			"id": 4340
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 7893
	}, {
		"name": "Stylish Red Shirt",
		"color": "ffffff",
		"id": 4330,
		"texture": 135029,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 3,
			"id": 2997
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}],
		"spellId": 3866
	}, {
		"name": "Gray Woolen Shirt",
		"color": "ffffff",
		"id": 2587,
		"texture": 135025,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Woolen Cloth",
			"color": "ffffff",
			"texture": "132913",
			"num": 2,
			"id": 2997
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}, {
			"name": "Gray Dye",
			"color": "ffffff",
			"texture": "132797",
			"num": 1,
			"id": 4340
		}],
		"spellId": 2406
	}, {
		"name": "Green Linen Shirt",
		"color": "ffffff",
		"id": 2579,
		"texture": 135024,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 3,
			"id": 2996
		}, {
			"name": "Fine Thread",
			"color": "ffffff",
			"texture": "132912",
			"num": 1,
			"id": 2321
		}, {
			"name": "Green Dye",
			"color": "ffffff",
			"texture": "134743",
			"num": 1,
			"id": 2605
		}],
		"spellId": 2396
	}, {
		"name": "Blue Linen Shirt",
		"color": "ffffff",
		"id": 2577,
		"texture": 135023,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 2,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}, {
			"name": "Blue Dye",
			"color": "ffffff",
			"texture": "134776",
			"num": 1,
			"id": 6260
		}],
		"spellId": 2394
	}, {
		"name": "Red Linen Shirt",
		"color": "ffffff",
		"id": 2575,
		"texture": 135029,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 2,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 1,
			"id": 2604
		}],
		"spellId": 2392
	}, {
		"name": "Simple Dress",
		"color": "ffffff",
		"id": 6786,
		"texture": 135016,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 2,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}, {
			"name": "Blue Dye",
			"color": "ffffff",
			"texture": "134776",
			"num": 1,
			"id": 6260
		}, {
			"name": "Bleach",
			"color": "ffffff",
			"texture": "132799",
			"num": 1,
			"id": 2324
		}],
		"spellId": 8465
	}, {
		"name": "Brown Linen Shirt",
		"color": "ffffff",
		"id": 4344,
		"texture": 135006,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 1,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}],
		"spellId": 3915
	}, {
		"name": "White Linen Shirt",
		"color": "ffffff",
		"id": 2576,
		"texture": 135030,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Linen Cloth",
			"color": "ffffff",
			"texture": "132890",
			"num": 1,
			"id": 2996
		}, {
			"name": "Coarse Thread",
			"color": "ffffff",
			"texture": "132891",
			"num": 1,
			"id": 2320
		}, {
			"name": "Bleach",
			"color": "ffffff",
			"texture": "132799",
			"num": 1,
			"id": 2324
		}],
		"spellId": 2393
	}, {
		"name": "Festive Red Pant Suit",
		"color": "ffffff",
		"id": 21542,
		"texture": 132696,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 4,
			"id": 14048
		}, {
			"name": "Firebloom",
			"color": "ffffff",
			"texture": "134200",
			"num": 2,
			"id": 4625
		}, {
			"name": "Red Dye",
			"color": "ffffff",
			"texture": "134732",
			"num": 2,
			"id": 2604
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 26407
	}, {
		"name": "Tuxedo Shirt",
		"color": "ffffff",
		"id": 10034,
		"texture": 135012,
		"num": 1,
		"categorie": "Miscellaneous",
		"items": [{
			"name": "Bolt of Mageweave",
			"color": "ffffff",
			"texture": "132894",
			"num": 4,
			"id": 4339
		}, {
			"name": "Heavy Silken Thread",
			"color": "ffffff",
			"texture": "132906",
			"num": 2,
			"id": 8343
		}],
		"spellId": 12085
	}, {
		"name": "Bolt of Soulcloth",
		"color": "ffffff",
		"id": 21844,
		"texture": 132909,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 1,
			"id": 21840
		}, {
			"name": "Soul Essence",
			"color": "ffffff",
			"texture": "136214",
			"num": 8,
			"id": 21882
		}],
		"spellId": 26750
	}, {
		"name": "Primal Mooncloth",
		"color": "0070dd",
		"id": 21845,
		"texture": 132897,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Imbued Netherweave",
			"color": "1eff00",
			"texture": "132900",
			"num": 1,
			"id": 21842
		}, {
			"name": "Primal Life",
			"color": "1eff00",
			"texture": "132848",
			"num": 1,
			"id": 21886
		}, {
			"name": "Primal Water",
			"color": "1eff00",
			"texture": "132852",
			"num": 1,
			"id": 21885
		}],
		"spellId": 26751
	}, {
		"name": "Shadowcloth",
		"color": "0070dd",
		"id": 24272,
		"texture": 132887,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Imbued Netherweave",
			"color": "1eff00",
			"texture": "132900",
			"num": 1,
			"id": 21842
		}, {
			"name": "Primal Shadow",
			"color": "1eff00",
			"texture": "132851",
			"num": 1,
			"id": 22456
		}, {
			"name": "Primal Fire",
			"color": "1eff00",
			"texture": "132847",
			"num": 1,
			"id": 21884
		}],
		"spellId": 36686
	}, {
		"name": "Spellcloth",
		"color": "0070dd",
		"id": 24271,
		"texture": 132910,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Imbued Netherweave",
			"color": "1eff00",
			"texture": "132900",
			"num": 1,
			"id": 21842
		}, {
			"name": "Primal Mana",
			"color": "1eff00",
			"texture": "132849",
			"num": 1,
			"id": 22457
		}, {
			"name": "Primal Fire",
			"color": "1eff00",
			"texture": "132847",
			"num": 1,
			"id": 21884
		}],
		"spellId": 31373
	}, {
		"name": "Bolt of Imbued Netherweave",
		"color": "1eff00",
		"id": 21842,
		"texture": 132900,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Bolt of Netherweave",
			"color": "ffffff",
			"texture": "132899",
			"num": 3,
			"id": 21840
		}, {
			"name": "Arcane Dust",
			"color": "ffffff",
			"texture": "132854",
			"num": 2,
			"id": 22445
		}],
		"spellId": 26747
	}, {
		"name": "Bolt of Netherweave",
		"color": "ffffff",
		"id": 21840,
		"texture": 132899,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Netherweave Cloth",
			"color": "ffffff",
			"texture": "132898",
			"num": 6,
			"id": 21877
		}],
		"spellId": 26745
	}, {
		"name": "Bolt of Runecloth",
		"color": "ffffff",
		"id": 14048,
		"texture": 132904,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Runecloth",
			"color": "ffffff",
			"texture": "132903",
			"num": 5,
			"id": 14047
		}],
		"spellId": 18401
	}, {
		"name": "Mooncloth",
		"color": "ffffff",
		"id": 14342,
		"texture": 132895,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Felcloth",
			"color": "ffffff",
			"texture": "132888",
			"num": 2,
			"id": 14256
		}],
		"spellId": 18560
	}, {
		"name": "Bolt of Mageweave",
		"color": "ffffff",
		"id": 4339,
		"texture": 132894,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Mageweave Cloth",
			"color": "ffffff",
			"texture": "132892",
			"num": 5,
			"id": 4338
		}],
		"spellId": 3865
	}, {
		"name": "Bolt of Silk Cloth",
		"color": "ffffff",
		"id": 4305,
		"texture": 132907,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Silk Cloth",
			"color": "ffffff",
			"texture": "132905",
			"num": 4,
			"id": 4306
		}],
		"spellId": 3839
	}, {
		"name": "Bolt of Woolen Cloth",
		"color": "ffffff",
		"id": 2997,
		"texture": 132913,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Wool Cloth",
			"color": "ffffff",
			"texture": "132911",
			"num": 3,
			"id": 2592
		}],
		"spellId": 2964
	}, {
		"name": "Bolt of Linen Cloth",
		"color": "ffffff",
		"id": 2996,
		"texture": 132890,
		"num": 1,
		"categorie": "Cloth",
		"items": [{
			"name": "Linen Cloth",
			"color": "ffffff",
			"texture": "132889",
			"num": 2,
			"id": 2589
		}],
		"spellId": 2963
	}, {
		"name": "Gordok Ogre Suit",
		"color": "1eff00",
		"id": 18258,
		"texture": 132636,
		"num": 1,
		"categorie": "Quest",
		"items": [{
			"name": "Bolt of Runecloth",
			"color": "ffffff",
			"texture": "132904",
			"num": 2,
			"id": 14048
		}, {
			"name": "Rugged Leather",
			"color": "ffffff",
			"texture": "134251",
			"num": 4,
			"id": 8170
		}, {
			"name": "Ogre Tannin",
			"color": "1eff00",
			"texture": "134719",
			"num": 1,
			"id": 18240
		}, {
			"name": "Rune Thread",
			"color": "ffffff",
			"texture": "136120",
			"num": 1,
			"id": 14341
		}],
		"spellId": 22813
	}];



});
