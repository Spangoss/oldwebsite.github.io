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
				for (var i = 0; i < inputArray.length; i++) {
					var category = inputArray[i].substr(0, inputArray[i].indexOf('-'));
					if (category == '') {
						category = 'Miscelaneous';
					}
					var skill = {
						name: inputArray[i].substr(0, inputArray[i].indexOf('(')),
						id: inputArray[i].split('=').pop().split(')')[0],
						category: category.trim()
					};
					$scope.tradeSkills.push(skill);
				}

				$scope.tradeSkillsArray = JSON.stringify($scope.tradeSkills);
				document.getElementById('wowProfessions').innerHTML = $scope.tradeSkillsArray;

			}

			// Copy the values to the clipboard
			$scope.copyWowTradeSkills = function (id) {
				var copyText = document.getElementById(id).textContent;
				navigator.clipboard.writeText(copyText);
				alert('Copied to Clipboard!');
			}

			// Enchanting Skills
			$scope.enchantingSkillsStored = [{
				"name": "Enchant Boots - Surefooted",
				"id": "27954",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Ring - Healing Power",
				"id": "27926",
				"category": "Enchant Ring"
			}, {
				"name": "Enchant Weapon - Mongoose",
				"id": "27984",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Boots - Boar's Speed",
				"id": "34008",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Boots - Cat's Swiftness",
				"id": "34007",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Bracer - Spellpower",
				"id": "27917",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Gloves - Major Spellpower",
				"id": "33997",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Spell Strike",
				"id": "33994",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Ring - Spellpower",
				"id": "27924",
				"category": "Enchant Ring"
			}, {
				"name": "Enchant Ring - Striking",
				"id": "27920",
				"category": "Enchant Ring"
			}, {
				"name": "Runed Eternium Rod",
				"id": "32667",
				"category": "Miscelaneous"
			}, {
				"name": "Enchant Chest - Exceptional Stats",
				"id": "27960",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Gloves - Major Healing",
				"id": "33999",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Major Strength",
				"id": "33995",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Weapon - Major Healing",
				"id": "34010",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Major Spellpower",
				"id": "27975",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Potency",
				"id": "27972",
				"category": "Enchant Weapon"
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
				"category": "Enchant 2H Weapon"
			}, {
				"name": "Enchant 2H Weapon - Greater Impact",
				"id": "13937",
				"category": "Enchant 2H Weapon"
			}, {
				"name": "Enchant 2H Weapon - Impact",
				"id": "13695",
				"category": "Enchant 2H Weapon"
			}, {
				"name": "Enchant 2H Weapon - Lesser Impact",
				"id": "13529",
				"category": "Enchant 2H Weapon"
			}, {
				"name": "Enchant 2H Weapon - Lesser Intellect",
				"id": "7793",
				"category": "Enchant 2H Weapon"
			}, {
				"name": "Enchant 2H Weapon - Lesser Spirit",
				"id": "13380",
				"category": "Enchant 2H Weapon"
			}, {
				"name": "Enchant 2H Weapon - Major Intellect",
				"id": "20036",
				"category": "Enchant 2H Weapon"
			}, {
				"name": "Enchant 2H Weapon - Major Spirit",
				"id": "20035",
				"category": "Enchant 2H Weapon"
			}, {
				"name": "Enchant 2H Weapon - Minor Impact",
				"id": "7745",
				"category": "Enchant 2H Weapon"
			}, {
				"name": "Enchant 2H Weapon - Superior Impact",
				"id": "20030",
				"category": "Enchant 2H Weapon"
			}, {
				"name": "Enchant Boots - Agility",
				"id": "13935",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Boots - Fortitude",
				"id": "27950",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Boots - Greater Agility",
				"id": "20023",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Boots - Greater Stamina",
				"id": "20020",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Boots - Lesser Agility",
				"id": "13637",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Boots - Lesser Spirit",
				"id": "13687",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Boots - Lesser Stamina",
				"id": "13644",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Boots - Minor Agility",
				"id": "7867",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Boots - Minor Speed",
				"id": "13890",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Boots - Minor Stamina",
				"id": "7863",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Boots - Spirit",
				"id": "20024",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Boots - Stamina",
				"id": "13836",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Boots - Vitality",
				"id": "27948",
				"category": "Enchant Boots"
			}, {
				"name": "Enchant Bracer - Assault",
				"id": "34002",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Brawn",
				"id": "27899",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Deflection",
				"id": "13931",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Greater Intellect",
				"id": "20008",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Greater Spirit",
				"id": "13846",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Greater Stamina",
				"id": "13945",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Greater Strength",
				"id": "13939",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Healing Power",
				"id": "23802",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Intellect",
				"id": "13822",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Lesser Deflection",
				"id": "13646",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Lesser Intellect",
				"id": "13622",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Lesser Spirit",
				"id": "7859",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Lesser Stamina",
				"id": "13501",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Lesser Strength",
				"id": "13536",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Major Intellect",
				"id": "34001",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Mana Regeneration",
				"id": "23801",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Minor Agility",
				"id": "7779",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Minor Deflection",
				"id": "7428",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Minor Health",
				"id": "7418",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Minor Spirit",
				"id": "7766",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Minor Stamina",
				"id": "7457",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Minor Strength",
				"id": "7782",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Restore Mana Prime",
				"id": "27913",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Spirit",
				"id": "13642",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Stamina",
				"id": "13648",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Stats",
				"id": "27905",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Strength",
				"id": "13661",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Superior Healing",
				"id": "27911",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Superior Spirit",
				"id": "20009",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Superior Stamina",
				"id": "20011",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Bracer - Superior Strength",
				"id": "20010",
				"category": "Enchant Bracer"
			}, {
				"name": "Enchant Chest - Exceptional Health",
				"id": "27957",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Greater Health",
				"id": "13640",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Greater Mana",
				"id": "13663",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Greater Stats",
				"id": "20025",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Health",
				"id": "7857",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Lesser Absorption",
				"id": "13538",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Lesser Health",
				"id": "7748",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Lesser Mana",
				"id": "7776",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Lesser Stats",
				"id": "13700",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Major Health",
				"id": "20026",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Major Mana",
				"id": "20028",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Major Spirit",
				"id": "33990",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Mana",
				"id": "13607",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Minor Absorption",
				"id": "7426",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Minor Health",
				"id": "7420",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Minor Mana",
				"id": "7443",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Minor Stats",
				"id": "13626",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Restore Mana Prime",
				"id": "33991",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Stats",
				"id": "13941",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Superior Health",
				"id": "13858",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Chest - Superior Mana",
				"id": "13917",
				"category": "Enchant Chest"
			}, {
				"name": "Enchant Cloak - Defense",
				"id": "13635",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Dodge",
				"id": "25086",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Fire Resistance",
				"id": "13657",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Greater Agility",
				"id": "34004",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Greater Defense",
				"id": "13746",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Greater Fire Resistance",
				"id": "25081",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Greater Nature Resistance",
				"id": "25082",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Greater Resistance",
				"id": "20014",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Lesser Agility",
				"id": "13882",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Lesser Fire Resistance",
				"id": "7861",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Lesser Protection",
				"id": "13421",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Lesser Shadow Resistance",
				"id": "13522",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Major Armor",
				"id": "27961",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Minor Agility",
				"id": "13419",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Minor Protection",
				"id": "7771",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Minor Resistance",
				"id": "7454",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Resistance",
				"id": "13794",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Spell Penetration",
				"id": "34003",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Stealth",
				"id": "25083",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Subtlety",
				"id": "25084",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Cloak - Superior Defense",
				"id": "20015",
				"category": "Enchant Cloak"
			}, {
				"name": "Enchant Gloves - Advanced Herbalism",
				"id": "13868",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Advanced Mining",
				"id": "13841",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Agility",
				"id": "13815",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Assault",
				"id": "33996",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Blasting",
				"id": "33993",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Fire Power",
				"id": "25078",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Fishing",
				"id": "13620",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Frost Power",
				"id": "25074",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Greater Agility",
				"id": "20012",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Greater Strength",
				"id": "20013",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Healing Power",
				"id": "25079",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Herbalism",
				"id": "13617",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Mining",
				"id": "13612",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Minor Haste",
				"id": "13948",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Riding Skill",
				"id": "13947",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Shadow Power",
				"id": "25073",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Skinning",
				"id": "13698",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Strength",
				"id": "13887",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Superior Agility",
				"id": "25080",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Gloves - Threat",
				"id": "25072",
				"category": "Enchant Gloves"
			}, {
				"name": "Enchant Shield - Frost Resistance",
				"id": "13933",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Shield - Greater Spirit",
				"id": "13905",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Shield - Greater Stamina",
				"id": "20017",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Shield - Intellect",
				"id": "27945",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Shield - Lesser Block",
				"id": "13689",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Shield - Lesser Protection",
				"id": "13464",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Shield - Lesser Spirit",
				"id": "13485",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Shield - Lesser Stamina",
				"id": "13631",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Shield - Major Stamina",
				"id": "34009",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Shield - Minor Stamina",
				"id": "13378",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Shield - Resilience",
				"id": "44383",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Shield - Spirit",
				"id": "13659",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Shield - Stamina",
				"id": "13817",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Shield - Superior Spirit",
				"id": "20016",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Shield - Tough Shield",
				"id": "27944",
				"category": "Enchant Shield"
			}, {
				"name": "Enchant Weapon - Agility",
				"id": "23800",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Crusader",
				"id": "20034",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Demonslaying",
				"id": "13915",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Fiery Weapon",
				"id": "13898",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Greater Striking",
				"id": "13943",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Healing Power",
				"id": "22750",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Icy Chill",
				"id": "20029",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Lesser Beastslayer",
				"id": "13653",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Lesser Elemental Slayer",
				"id": "13655",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Lesser Striking",
				"id": "13503",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Lifestealing",
				"id": "20032",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Mighty Intellect",
				"id": "23804",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Mighty Spirit",
				"id": "23803",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Minor Beastslayer",
				"id": "7786",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Minor Striking",
				"id": "7788",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Spell Power",
				"id": "22749",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Strength",
				"id": "23799",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Striking",
				"id": "13693",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Superior Striking",
				"id": "20031",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Unholy Weapon",
				"id": "20033",
				"category": "Enchant Weapon"
			}, {
				"name": "Enchant Weapon - Winter's Might",
				"id": "21931",
				"category": "Enchant Weapon"
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
			$scope.tailoringSkillsStored = {
				[{
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
					"name": "Soulcloth Vest",
					"color": "a335ee",
					"id": 21865,
					"texture": 132653,
					"num": 1,
					"categorie": "Cloth",
					"items": [{
						"name": "Bolt of Soulcloth",
						"color": "ffffff",
						"texture": "132909",
						"num": 8,
						"id": 21844
					}, {
						"name": "Rune Thread",
						"color": "ffffff",
						"texture": "136120",
						"num": 4,
						"id": 14341
					}],
					"spellId": 26781
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
				}]

			});
