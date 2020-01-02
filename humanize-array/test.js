humanize([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

humanize([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

humanize([ {name: 'Bart'} ])
// returns 'Bart'

humanize([])
// returns ''
