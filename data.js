let doctors = [
    {version: 'ninth', companions: 'Rose Tyler', actor: 'Christopher Eccleston', catch_phrase: 'Fantastic!'},
    {version: 'tenth', companions: 'Rose Tyler, Martha Jones, Donna Noble ',actor: 'David Tennant', catch_phrase: 'Allons-y'},
    {version: 'eleventh', companions: 'Amy Pond, Rory Williams, Clara Oswald', actor: 'Matt Smith', catch_phrase: 'Geronimo'},
    {version: 'twelfth', companions: 'Clara Oswald, Bill Potts, Nardole', actor: 'Peter Capaldi', catch_phrase: 'Question... Answer...'},
    {version: 'thirteenth', companions: 'Yasmin Kahn, Ryan Sinclair, Graham O\'Brien', actor: 'Jody Whittaker', catch_phrase: 'Let\'s get our shift on.'},
];

 const getAll = () => {
    return doctors;
};

module.exports = {getAll};