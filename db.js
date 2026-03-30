/*
	This file is PURELY FOR INITIALIZATION!!! 
	IT DOESN'T REQUIRE ANY CHANGES!!!
*/

import TreeNode from './TreeNode.js';

const init = () => {
  return {
    char1: ayanokojiTreeNode,
    char2: mihawkTreeNode,
    char3: teachTreeNode,
    char4: minatoTreeNode,
    char5: kakashiTreeNode,
    char6: akazaTreeNode,
    char7: tengenTreeNode,
    char8: jigenTreeNode,
    char9: garpTreeNode,
    char10: itachiTreeNode,
    char11: sasukeTreeNode,
    char12: banTreeNode,
    char13: spiegelTreeNode,
    char14: vtsTreeNode,
    char15: thorsTreeNode,
  };
};

// 1. Ayanokoji Kiyotaka (Classroom of the Elite)
const ayanokojiTreeNode = new TreeNode('Ayanokoji Kiyotaka');

ayanokojiTreeNode.addChild('Strategy & Deception');
ayanokojiTreeNode.children[0].addChild(
  'Tools are not meant to have emotions. They exist only to fulfill their purpose.'
);
ayanokojiTreeNode.children[0].addChild(
  "In this world, winning isn't everything—but losing means you were never necessary."
);
ayanokojiTreeNode.children[0].addChild(
  'People show their true nature when they believe no one is watching.'
);

ayanokojiTreeNode.addChild('Human Nature');
ayanokojiTreeNode.children[1].addChild(
  'Equality is a beautiful lie we tell ourselves to feel safe.'
);
ayanokojiTreeNode.children[1].addChild(
  'Talent is merely the result of an environment that forced growth.'
);
ayanokojiTreeNode.children[1].addChild('Kindness is just a slower form of manipulation.');

ayanokojiTreeNode.addChild('Self-Reliance');
ayanokojiTreeNode.children[2].addChild(
  'If you rely on others, you will always be disappointed. Trust only your own abilities.'
);
ayanokojiTreeNode.children[2].addChild('Defeat is not failure. It is an information.');

// 2. Dracule Mihawk (One Piece)
const mihawkTreeNode = new TreeNode('Dracule Mihawk');

mihawkTreeNode.addChild('Solitude & Strength');
mihawkTreeNode.children[0].addChild(
  'A true swordsman needs no companions. The blade itself is enough.'
);
mihawkTreeNode.children[0].addChild(
  'I do not chase. I wait. The strong attract what they deserve.'
);
mihawkTreeNode.children[0].addChild('Loneliness is the price of standing at the summit.');

mihawkTreeNode.addChild('Purpose');
mihawkTreeNode.children[1].addChild('A sword without purpose is merely scrap metal.');
mihawkTreeNode.children[1].addChild(
  'Find what you wish to cut. Only then will your blade gain meaning.'
);
mihawkTreeNode.children[1].addChild('Patience is the greatest weapon of the truly strong.');

mihawkTreeNode.addChild('Self-Knowledge');
mihawkTreeNode.children[2].addChild('Know your limits before you claim you have none.');
mihawkTreeNode.children[2].addChild('The greatest enemy is the hesitation within yourself.');

// 3. Marshall D. Teach (One Piece)
const teachTreeNode = new TreeNode('Marshall D. Teach');

teachTreeNode.addChild('Dreams & Ambition');
teachTreeNode.children[0].addChild("People's dreams... have no end! Isn't that right?");
teachTreeNode.children[0].addChild('The age where pirates fear dreams? That age is over.');
teachTreeNode.children[0].addChild('Those who cannot dream will never understand those who can.');

teachTreeNode.addChild('Fate & Destiny');
teachTreeNode.children[1].addChild(
  "A man's fate is decided the moment he decides what he truly wants."
);
teachTreeNode.children[1].addChild('The heavens choose those who dare to reach for them.');

teachTreeNode.addChild('Philosophy');
teachTreeNode.children[2].addChild('Win and take. Lose and be taken. That is the only truth.');
teachTreeNode.children[2].addChild('Justice? Mercy? Concepts invented by the weak.');

// 4. Namikaze Minato (Naruto)
const minatoTreeNode = new TreeNode('Namikaze Minato');

minatoTreeNode.addChild('Legacy');
minatoTreeNode.children[0].addChild(
  "A parent's greatest gift is not life itself, but the path they leave behind."
);
minatoTreeNode.children[0].addChild(
  "True heroes don't live to see their legend—they plant seeds for future harvest."
);

minatoTreeNode.addChild('Sacrifice');
minatoTreeNode.children[1].addChild(
  'To protect what matters, sometimes you must give what matters most.'
);
minatoTreeNode.children[1].addChild(
  "Courage isn't surviving. Courage is dying for something you believe in."
);

minatoTreeNode.addChild('Belief');
minatoTreeNode.children[2].addChild('Never underestimate the power of believing in someone.');
minatoTreeNode.children[2].addChild(
  "The Yellow Flash didn't move faster than light—he moved faster than doubt."
);

// 5. Hatake Kakashi (Naruto)
const kakashiTreeNode = new TreeNode('Hatake Kakashi');

kakashiTreeNode.addChild('Friendship & Bonds');
kakashiTreeNode.children[0].addChild('Those who abandon their friends are worse than trash.');
kakashiTreeNode.children[0].addChild(
  'In the shinobi world, those who break the rules are trash. But those who abandon their comrades are worse than trash.'
);

kakashiTreeNode.addChild('Growth');
kakashiTreeNode.children[1].addChild(
  'Looking at the future and dwelling on the past are both forms of blindness.'
);
kakashiTreeNode.children[1].addChild(
  'Your real strength comes from protecting what you love, not destroying what you hate.'
);

kakashiTreeNode.addChild('Perspective');
kakashiTreeNode.children[2].addChild(
  "Underneath the mask, we all hide something. The question is—do you know what you're hiding from yourself?"
);
kakashiTreeNode.children[2].addChild(
  'Sometimes the best way to teach is to let others find their own answers.'
);

// 6. Akaza (Demon Slayer)
const akazaTreeNode = new TreeNode('Akaza');

akazaTreeNode.addChild('Strength & Combat');
akazaTreeNode.children[0].addChild('The weak deserve nothing but the dust beneath my feet.');
akazaTreeNode.children[0].addChild('True strength is forged in the fires of absolute will.');

akazaTreeNode.addChild('Existence');
akazaTreeNode.children[1].addChild(
  'Why cling to life? Death is simply another form of becoming stronger.'
);
akazaTreeNode.children[1].addChild('Those who hesitate are already dead.');

akazaTreeNode.addChild('Respect for Opponents');
akazaTreeNode.children[2].addChild(
  'I remember the names of those worth fighting. The rest... are forgettable.'
);
akazaTreeNode.children[2].addChild('If you cannot protect what you love, you never deserved it.');

// 7. Tengen Uzui (Demon Slayer)
const tengenTreeNode = new TreeNode('Tengen Uzui');

tengenTreeNode.addChild('Flamboyance & Excellence');
tengenTreeNode.children[0].addChild(
  "Everything I do is flamboyant! If it's not flashy, it's not worth doing!"
);
tengenTreeNode.children[0].addChild(
  'Mediocrity is the only true sin. Be extraordinary or be nothing.'
);

tengenTreeNode.addChild('Confidence');
tengenTreeNode.children[1].addChild("Doubt is a poison. I've never drunk from that cup.");
tengenTreeNode.children[1].addChild(
  "A god of festivals doesn't pray for good weather—he creates it."
);

tengenTreeNode.addChild('Duty');
tengenTreeNode.children[2].addChild(
  'I may move like the wind, but my blade cuts with the weight of mountains.'
);
tengenTreeNode.children[2].addChild(
  'Style without substance is just glitter. Substance without style is invisible.'
);

// 8. Jigen Otsutsuki (Boruto/Naruto)
const jigenTreeNode = new TreeNode('Jigen Otsutsuki');

jigenTreeNode.addChild('Power & Evolution');
jigenTreeNode.children[0].addChild(
  'What is a god to those who have never known divinity? Mere myth.'
);
jigenTreeNode.children[0].addChild(
  'Evolution demands extinction. The old must fall for the new to rise.'
);

jigenTreeNode.addChild('Hierarchy');
jigenTreeNode.children[1].addChild(
  'There is no such thing as equality. There is only vessel and vessel-maker.'
);
jigenTreeNode.children[1].addChild(
  'You mistake my patience for mercy. Do not make that error again.'
);

jigenTreeNode.addChild('Purpose');
jigenTreeNode.children[2].addChild(
  'I have lived long enough to know—those who cling to morality die first.'
);
jigenTreeNode.children[2].addChild('A cage is still a home to those who have never known freedom.');

// 9. Monkey D. Garp (One Piece)
const garpTreeNode = new TreeNode('Monkey D. Garp');

garpTreeNode.addChild('Justice');
garpTreeNode.children[0].addChild(
  'Justice is not a rule. Justice is a feeling. And I follow my heart.'
);
garpTreeNode.children[0].addChild(
  "The Marines' justice? Hah! I'll decide what justice means when I swing my fists."
);

garpTreeNode.addChild('Family');
garpTreeNode.children[1].addChild(
  "Blood doesn't make family. Love makes family. And I love those brats more than anything."
);
garpTreeNode.children[1].addChild(
  'Let them call me a disgrace. My grandchildren will be greater than any hero.'
);

garpTreeNode.addChild('Freedom');
garpTreeNode.children[2].addChild(
  'Rules are made to protect the people—not to strangle them. Remember that.'
);
garpTreeNode.children[2].addChild('A man who fears his own choices is already defeated.');

// 10. Uchiha Itachi (Naruto)
const itachiTreeNode = new TreeNode('Uchiha Itachi');

itachiTreeNode.addChild('Sacrifice & Love');
itachiTreeNode.children[0].addChild(
  'Those who forgive themselves—those who accept their sins—are truly strong.'
);
itachiTreeNode.children[0].addChild(
  'It is not the face that hides the truth. It is the heart that decides what to show.'
);

itachiTreeNode.addChild('Wisdom');
itachiTreeNode.children[1].addChild(
  'People live their lives bound by what they accept as correct. That is what makes them weak.'
);
itachiTreeNode.children[1].addChild(
  "Knowing what you don't know is greater wisdom than knowing what you know."
);

itachiTreeNode.addChild('Peace');
itachiTreeNode.children[2].addChild(
  'We do not know what kind of people we truly are until the moment before our death.'
);
itachiTreeNode.children[2].addChild('Sometimes the greatest love requires the greatest cruelty.');

// 11. Uchiha Sasuke (Naruto/Boruto)
const sasukeTreeNode = new TreeNode('Uchiha Sasuke');

sasukeTreeNode.addChild('Revenge & Purpose');
sasukeTreeNode.children[0].addChild(
  'I have walked the path of darkness so others may stay in the light.'
);
sasukeTreeNode.children[0].addChild(
  'Revenge empties you. But sometimes emptiness is the only honest state.'
);

sasukeTreeNode.addChild('Solitude');
sasukeTreeNode.children[1].addChild(
  'I chose to walk alone. Not because I wanted to—because I had to.'
);
sasukeTreeNode.children[1].addChild(
  'Loneliness is not the absence of people. It is the absence of understanding.'
);

sasukeTreeNode.addChild('Redemption');
sasukeTreeNode.children[2].addChild(
  'A man who cannot atone for his sins has no right to exist in peace.'
);
sasukeTreeNode.children[2].addChild('The past is not chains unless you make it so.');

// 12. Ban (Seven Deadly Sins)
const banTreeNode = new TreeNode('Ban');

banTreeNode.addChild('Immortality & Love');
banTreeNode.children[0].addChild("Eternity is meaningless without the one you'd spend it with.");
banTreeNode.children[0].addChild(
  "I stole immortality. But I'd trade it all for one more moment with her."
);

banTreeNode.addChild('Recklessness');
banTreeNode.children[1].addChild(
  "A man who never loses isn't strong—he's just never taken a real risk."
);
banTreeNode.children[1].addChild(
  "Rules? Laws? I'm a thief. I steal what I want, including my own fate."
);

banTreeNode.addChild('Loyalty');
banTreeNode.children[2].addChild(
  "I don't fight for justice. I don't fight for honor. I fight for the few people I'd die for."
);
banTreeNode.children[2].addChild(
  "A real friend punches you when you're being an idiot. Then buys you a drink after."
);

// 13. Spike Spiegel (Cowboy Beebop)
const spiegelTreeNode = new TreeNode('Spike Spiegel');

spiegelTreeNode.addChild('Living in the Moment');
spiegelTreeNode.children[0].addChild('Whatever happens, happens.');
spiegelTreeNode.children[0].addChild(
  "I'm not going there to die. I'm going to find out if I'm really alive."
);

spiegelTreeNode.addChild('The Past');
spiegelTreeNode.children[1].addChild("You're gonna carry that weight.");
spiegelTreeNode.children[1].addChild('The past is a ghost. It haunts you if you let it.');

// 14. Vash the Stampede (Trigun)
const vtsTreeNode = new TreeNode('Vash the Stampede');

vtsTreeNode.addChild('Pacifism & Love');
vtsTreeNode.children[0].addChild("Love and peace! That's all I'm asking for!");
vtsTreeNode.children[0].addChild(
  "I don't want to kill anyone. No matter what, I refuse to take a life."
);

vtsTreeNode.addChild('Hope');
vtsTreeNode.children[1].addChild(
  "The world isn't perfect. But it's there for us, doing the best it can. That's what makes it so beautiful."
);
vtsTreeNode.children[1].addChild('A bullet may end a life, but it cannot end a belief.');

// 15. Thors Snorresson (Vinland Saga)
const thorsTreeNode = new TreeNode('Thors Snorresson');

thorsTreeNode.addChild('True Strength');
thorsTreeNode.children[0].addChild('A true warrior needs no sword.');
thorsTreeNode.children[0].addChild(
  'You have no enemies. No one has any enemies. There is no one you should hurt.'
);

thorsTreeNode.addChild('Legacy');
thorsTreeNode.children[0].addChild(
  "A man's value isn't measured by how many he's killed, but by what he chooses to protect."
);
thorsTreeNode.children[0].addChild(
  "Don't feel ashamed to run from those battles. A true warrior doesn't need revenge."
);

export const charactersDatabase = init();