
let doctors = [
    {version: 'Ninth', companions: 'Rose Tyler', actor: 'Christopher Eccleston', catch_phrase: 'Fantastic!'},
    {version: 'Tenth', companions: 'Rose Tyler, Martha Jones, Donna Noble ',actor: 'David Tennant', catch_phrase: 'Allons-y'},
    {version: 'Eleventh', companions: 'Amy Pond, Rory Williams, Clara Oswald', actor: 'Matt Smith', catch_phrase: 'Geronimo'},
    {version: 'Twelfth', companions: 'Clara Oswald, Bill Potts, Nardole', actor: 'Peter Capaldi', catch_phrase: 'Question... Answer...'},
    {version: 'Thirteenth', companions: 'Yasmin Kahn, Ryan Sinclair, Graham O\'Brien', actor: 'Jody Whittaker', catch_phrase: 'Let\'s get our shift on.'},
];

 const getAll = () => {
    return doctors;
};

const getDetail = (version) => {
    return doctors.find((doctors) => {
        return doctors.version == version;
    });
};


module.exports = {getAll, getDetail};
