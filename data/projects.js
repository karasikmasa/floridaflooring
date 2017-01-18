projects = [
	{
		"name" : "Improve Diff Handling",
		"desc" : "Bears should be able to offer more than just one possible \
		 patch for an issue.",
		"requirements" : [
			"The proposal has to contain a clear concept.",
			"The applicant should have one patch accepted to the coala core."
		],
		"difficulty" : "low",
		"issues" : [
			"https://github.com/coala/coala/issues/1021"
		],
		"mentors" : [
			"sils",
			"jayvdb"
		],
		"initiatives" : ["GSoC"],
		"tags" : ["Core", "CLI"],
		"markdown": "improve_diff_handling.md"
	},
	{
		"name" : "Create Jenkins Plugin",
		"desc" : "Jenkins users should be able to see coala results right in the \
		Jenkins UI.",
		"requirements" : [
			"Any patch to jenkins has been accepted.",
			"The applicant is familiar with the coala plugins.",
			"Any patch to any coala plugin has been accepted and merged."
		],
		"difficulty" : "low",
		"issues" : [
			"https://github.com/coala/coala/issues/2757"
		],
		"mentors" : [
			"Udayan12167",
			"jayvdb"
		],
		"initiatives" : ["GSoC"],
		"tags" : ["Plugins", "CI"],
		"markdown": "create_jenkins_plugin.md"
	},
	{
		"name" : "Extend Linter Integration",
		"desc" : "This project enhances our linter framework and creates a number \
		of third party tool integrations.",
		"requirements" : [
			"The applicant has added an arbitrary linter to coala.",
			"The proposal contains a list of linters to integrate for every \
milestone, split into two batches."
		],
		"difficulty" : "medium",
		"issues" : [
			"https://github.com/coala/engagement/issues/66"
		],
		"mentors" : [
			"AbdealiJK",
			"Makman2"
		],
		"initiatives" : ["GSoC"],
		"tags" : ["Linter", "Bears"],
		"markdown": "extend_linter_integration.md"
	},
	{
		"name" : "Implement Metrics for coala",
		"desc" : "There is more to software quality than just passing builds - \
coala should support generating metrics for your code.",
		"requirements" : [
			"At least one patch to the coala core should be accepted and merged.",
			"The student should be familiar with ongoing technical cEPs.",
			"The proposal needs to contain a clear concept."
		],
		"difficulty" : "high",
		"issues" : [
			"https://github.com/coala/coala/issues/759"
		],
		"mentors" : [
			"fneu",
			"jayvdb"
		],
		"initiatives" : ["GSoC"],
		"tags" : ["Core", "Bears"],
		"markdown": "implement_metrics_for_coala.md"
	},
	{
		"name" : "Debug and Profile Bears",
		"desc" : "coala should support developers of code analysis by providing \
		facilities to debug and profile bears.",
		"requirements" : [
			"At least one patch to the coala core should be accepted and merged.",
			"The student should be familiar with ongoing technical cEPs.",
			"The proposal needs to contain a clear concept.",
			"Familiarity with pdb is a plus."
		],
		"difficulty" : "high",
		"issues" : [
			"https://github.com/coala/coala/issues/565",
			"https://github.com/coala/coala/issues/1101"
		],
		"mentors" : [
			"Makman2",
			"Udayan12167"
		],
		"initiatives" : ["GSoC"],
		"tags" : ["Core", "Bears", "Debugging"],
		"markdown": "debug_profile.md"
	},
]
