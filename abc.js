// ABC tab: personal principles, one chapter per alphabet letter.
// Each entry body: one line per bullet; leading "-" characters set the depth.
const abcMarks = ['', '– ', '↳ ', '↳↳ ', '↳↳↳ '];
const abcEntry = (title, body) => ({
  title,
  items: body.trim().split('\n').map((line) => {
    const depth = Math.min((line.match(/^-+/) || [''])[0].length, abcMarks.length - 1);
    return abcMarks[depth] + line.replace(/^-+\s*/, '').trim();
  }).filter((text) => text.replace(/^[–↳\s]+/, '')),
});
const abcChapter = (letter, word, entries) => ({
  title: `${letter} — ${word}`,
  heading: `${letter} for ${word}`,
  definition: `${letter} = ${word}: personal principles aur reminders.`,
  concept: `ABC · ${letter} = ${word.toUpperCase()}`,
  nameLists: entries.map(([title, body]) => abcEntry(title, body)),
});

window.zbookAbc = [
  abcChapter('A', 'Action', [['1. Action (1 minute action is better than 100 years thinking, confusion is hell. So, accept Action’s Pain with smile)', `
Do it, whatever it takes.
Result lai nahi krna, balky ay k chiz changi ay ty bas dil lga rvay ty time acha gzry. Jis cheez ko time(hours) dedo gy wo kar lo gy
Not for
-Result / Success / Popularity / Showoff / Money
but for
-Excellence / Kabiliyat / Knowledge / Munasib-time-pas k liye krna hai.
Agr dil na kry zruri kam ko to socho k ye aik medicine hai jo k karvi hai lkn iska faida b hai. Agr late kru to nuksan hai apna. Bs phr aankhen band kar k berdash kru q k phr bad me aadat ho jaye gi or phr chass aygi
DO IT NOW(if have ability)
Because the longer you delay, the more you pay
There is no more time for Discipline-work. Life is short.
Start with Bism-Allah
Ao Quality Quality khely
Practice like you never won, perform like you never lose.
Every improvement matters, don't underestimate any.
Speak whatever you do with voice up to ears and move hand average 90-degree
Because:
-The magic you are looking for is in the work you are avoiding
-The person who is willing to suffer is unbeatable(zyada se zyada kya e hojay ga)
-Don’t bury opportunity for temporary pleasure instead, Grab Opportunity.
-Pain will leave you once it has finished teaching you. (Bruce Lee)
-Words start losing value, when action don't match
Do Activity/Action your best which can be Beneficial/Necessary in near or far future otherwise don’t do it.
Kam aesa kro k pachtava(regret) na ho
WNPCRA (Have Allah’s Willing ,Necessity?, Purpose?, who is Controlling you or other you, will be Regretful? Action✨)
`]]),

  abcChapter('B', 'Brave / Busy / Believe / Be', [
    ['2. Brave (Tunn k rkho discipline nu, jo hoy gi wekhi jay gi)', `
Tunn k rkho discipline nu, jo hoy gi wekhi jay gi
`],
    ['3. Busy', `
Itna k irrelevant activity ka time e na mily
Itna k kisi ki yad hurt na kry
Do multiple tasks under same route(lagy hath ye b krlo)
Private until permanent (Success, love, planning, income source, happiness, goals)
Utilize time
-Act priority wise
-Agr ye ni horha to kch or krlo
-Relaxe ni hona, apny din ki mehnat puri kro
`],
    ['4. Believe', `
Allah
-Infinite
Discipline
-Blind
Self
-100% but must verify
Surrounding & others
-Trust but verify
`],
    ['5. Be', `
1%/100% of people’s habits
Aajiz
Loyal/passionate/Love yourself and your purpose/work/action
-No compromise on main mission
-Don’t create hope for reward
Honest
Patient
-Great things take time
Polite
Finisher/Finish well
-Satisfactory / Tasalli baksh → agr kisi ko kr k dena
-Dubara os jga anay ya istmal krnay ka dil kray
-Because it’s not over until I win
Understanding
Well mannered
`],
  ]),

  abcChapter('C', 'Calm / Control / Communicate / Cleanliness / Careless / Consistency', [
    ['6. Calm in every situation', `
If you verify some matter, control yourself. Don’t be too happy (auk at se bahr Hona) nor sad (kufr Hai)
Kahli Wala pseena nai nkaalna, skoon se relax nazr aaky Kam krna
`],
    ['7. Control (ADELM)', `
1. Anger
2. Drama → kch hoya e ni
3. Emotion
-Because, PEACE is real power
4. Lust
-You'll realize your real you
-You'll realize 90% girls are boring
5. Mind
-You cannot step into the FUTURE(Unknown) if you don't let go of the PAST(Dead).
-Focus on what you can control at present(LIVE)
--I have only this present moment, which is the most precious task to me at that moment.
--Let go of old memories and live in the moment/present.
-Past(Dead):
--Forgive, forget and don’t repeat mistake
-Focus on now:
--What I can do. So, do it.
--What To Do NEXT
--Focus on your path/line of the road
--Rehta kya hai(baki), (ki karn ala pya ay)
`],
    ['8. Communicate with body language (Speak with hand and tongue)', `
Speak with hand and tongue
`],
    ['9. Cleanliness', `
Surrounding
-1. Room
-2. Stuff
Self
-1. Clothes
-2. Language/Tongue
-3. Mind
-4. Shoe
-5. Skin
Doing
`],
    ['10. Careless (if you\'re satisfied with your actions) about', `
Result
Time
Place
People
-Because water has no effect on fake flowers
-Whom what said
-Whom what says
-Whom what will say
-Whom what is doing
-Who leave you(let them go, jaan chaddy)
If someone is abstaining, let him go (chipku ni bnena)
Jera janda ay, JAAY(you are not ghulaam to eachOther)
Don’t beg attention. Mangi hui twajja izzat e nafs ki touheen.
`],
    ['11. Consistency (No-Holiday)', `
Like:
-Cooking something
-Dropping droplets to fill the kettle
Because:
-Attendance zaruri hai(time dena), result milay ya na mily
-Ander di gal ay k result kadi na kadi mily ga zrur
-Time km e to(kehna → ooo bara time ay, dekhi ty sai), lkn jitna hoskay otna ty kro. Na hony se kch behtr
-ideas don't come fully formed, they are build with time while working on
-there is always room to grow
Namaz
Learning
Physical activity
`],
  ]),

  abcChapter('D', 'Discipline / Don\'t / Decide', [
    ['12. Discipline', `
Discipline
`],
    ['13. Don\'t', `
Beg instead give
Compare yourself to others, just improve from yesterday as your only target is you
Excuse
-Because Excuses make today easy but tomorrow hard while Discipline make today hard but tomorrow easy
Expect to get what you give from people
Fear from people
Hesitate from people
Be Thief of eye
Quite plan
Regret
Showoff (kch ni btana, jub tk koi puchay na, Tell no one, bs chalty jao)
-Wins
-Loses
-Struggle
Panic/worry
-Because it does not only take away tomorrow’s troubles, rather it takes away today’s pleasure too. So, don’t worry.
-About past or future, rather act in present for future
Blame/ilzaam
Wait for response, otni der apna koi or kam kro
Complain about difficulty (Randi Rona ni btana)
`],
    ['14. Decide intelligently / maturely', `
THIS or THAT (priority wise)
Mature by actions (lazmi)
Don’t make a decision when you are too angry or too happy; rather think with a cool mind and then follow it.
Because things matter like:
-1. Character
-2. Health
-3. Time
-4. Money
-5. Set an achievable deadline
--Because a goal is a dream with is deadline
`],
  ]),

  abcChapter('E', 'Exercise / Enjoy / Earn', [
    ['15. Exercise', `
Exercise / Workout must be daily
`],
    ['16. Enjoy / chill', `
Feel the Win targets per day / Improve / Accuracy / Preciseness(kitna behtar ho sakta until perfection) is called enjoyment
`],
    ['17. Earn', `
Q k Jawani ki berozgari, mout ka dusra nam hai
On some occasions, men have no respect while money is respected.
`],
  ]),

  abcChapter('F', 'Finish-Well / Focused', [
    ['18. Finish-Well (Place, Stuff, Food)', `
Chiz ya jga ko aese chorna k again anay ya use krnay ka dil kry. Finish what you started.
`],
    ['19. Focused', `
To every matter, situation, condition or thing, see its positive aspect and benefit it rather negative aspect because it can slow you down
You don’t need more time, you need more focus chaha time kam e ho
On:
-Hands
-Words my speaking
-Face direction
-Front object
-Present
`],
  ]),

  abcChapter('G', 'Give', [['20. Give', `
Give ( 120 / 100 ) % k kam ch jaan pa dao(verify lazmi). Cherry on top
`]]),

  abcChapter('H', 'Hunger / Hate', [
    ['21. Hunger', `
Of Success / Winning / Learning (Run behind excellence, success will come khud e)
Not of money(automatically ayga lkn dhyan ni krna)
`],
    ['22. Hate', `
Hate no one if the action of someone makes you angry, you are immature.
Sin instead of Sinner. Because Sinner can be good
`],
  ]),

  abcChapter('I', 'Investigate / Keep-Improving', [
    ['23. Investigate/Check', `
To ye cheez tmy tumhare action se rok skty hai??? Kawaii!!!!!!!
Where {Energy, Focus, intention and time(each minute and second)} → (Masrofiyat/Khapna) is being used (time janda kithy pya ay) as you are the product of it.
You will become what you do today not tomorrow
Aj ka din me khan kahn improvement hoskti hai
`],
    ['24. Keep-Improving', `
Keep improving: اللّٰہ کے نبی صلی اللہ علیہ وآلہ وسلم کے سوا کوئی انسان بھی مکمل نہیں۔ ہر انسان کو مسلسل بہتری کی ضرورت ہوتی ہے۔
`],
  ]),

  abcChapter('J', '???', [['25. J _ ???', `
???
`]]),

  abcChapter('K', 'Knowledge', [['26. Knowledge', `
Field me Itna k koi sath ka na ho
Paava banjao
`]]),

  abcChapter('L', 'Loneliness / Look', [
    ['27. Loneliness', `
Loneliness should be holy and clean. It is the price of success.
`],
    ['28. Look for the best option', `
Look for the best option. If not, make some effort to create one.
`],
  ]),

  abcChapter('M', 'Mindset / Maintain', [
    ['29. Mindset / Mentality', `
Mindset / Mentality
`],
    ['30. Maintain', `
Class / Personality
Body posture (confident)
Discipline
-Action of what should do at the moment without breaking consistency like ajka kam khtm kr r rehna
-Dopamine knsi masroofiyat se lena hai
-Dunya or Akhirah me Self-Respect ki improvement k liye Action krna
-Where should I be busy/(dil-laana) now?
-At the moment what is the ONLY(best) option for me to act on?
--Is it for me
--What’s in it for me?
--Is it in my System?
--Is it in my Diet?
--Is it according to my Standards?
--As it is my Love.
To get سکون
Requirement:
-Jigra
-Hard Work
-Hardest choices require the strongest wills
-It’s path is of Good-habits(you) vs bad-habits(you):
-It’s the path of:
--Choosing diet
--Loneliness
--Boring
--Full of failures(steps to success)
--No enjoy while struggling
--Foolishness
--Difficulty
--addition
`],
  ]),

  abcChapter('N', 'Namaz / Vitamin-N / Network-making', [
    ['31. Namaz', `
Namaz is key for mental peace
`],
    ['32. (Vitamin-N) Saying NO', `
Saying NO to {Ego, Unnecessary-friends, negative-thoughts, meetings and time pass(social media), unhealthy-addiction}
`],
    ['33. Network-making', `
Connection instead of attachment
Environment affects as even if you don’t buy the perfume, you will bring its smell out.
You are the 5th of your surrounding 4. So, choose wisely.
`],
  ]),

  abcChapter('O', 'Organized', [['34. Organized', `
Organized everything as visual of perfection
`]]),

  abcChapter('P', 'Priority / Praise / Pyar / Posture', [
    ['35. Priority', `
Do priority task 1st
`],
    ['36. Praise/advice but don\'t taunt', `
Praise/advice but don't taunt
`],
    ['37. Pyar rakh, jga bnay gi', `
Payr rakh, jga bnay gi (Be yourself, world will adjust)
`],
    ['38. Posture correction', `
Posture correction
`],
  ]),

  abcChapter('Q', 'Question', [['39. Question yourself', `
Are you satisfied with your activity?
`]]),

  abcChapter('R', 'Respect / Responsible / Respectful / Recover', [
    ['40. Respect', `
Respect others like water or like climbing mountain(akrna ni)
`],
    ['41. Responsible/PAWA/Clever/Skillful/expert', `
Be the best version of yourself in every field of life.
Give 100% to it
Itna changa k koi nalda v na hoy
`],
    ['42. Respectful', `
Respect:
-Self
-Self Decision (kisi k liy gir ni jana kuty ki terha)
-Let other respect you
jhuk k chalna hmesha, akrna nahi
Journey like climbing a mountain by inclining and forwarding.
The journey to the destination is like climbing the peak of a mountain. If you have to climb, you have to bow down. You will fall back if you straighten your back(arrogant)
Respec
`],
    ['43. Recover the fault', `
Recover the fault.
`],
  ]),

  abcChapter('S', 'Sacrifice / Simple', [
    ['44. Sacrifice/Avoid/Don’t-Care (Distracting stuff from Discipline)', `
Shuruaat to phr Pasandidaa chiz se hoti hai na
unnecessary(not useful in future) stuff
Spark e ni bnenay dena, agr bn gya to mita do haha
Useless talk
Addiction:
-1. FB, Insta, Social-media random Scrolling
-2. p*rn / Masterbation
-3. Finding comfort with non-mahram Girl
-4. Accept the mistake/fault/missing/failure/difficulty and recover double of it
`],
    ['45. Keep simple', `
Talk
Things
Don’t give a shit too much time and attention
Non-mahram girl(bs kam k kam)
`],
  ]),

  abcChapter('T', 'ToDo plan / Thinking / Talk', [
    ['46. Stick to ToDo plan', `
Because an Idiot with a plan can beat a genius without a plan.
`],
    ['47. Thinking', `
Unity (one stuff at a time), no multiple thinking  → rush ni pana
Focus on what you are doing, speaking and Hands and the custody of Allah
-Focus on solutions rather than problems.
Agr kam ka rush pr gya to socho k:
-Me sara abi kr e ni skta. Bs aik time py aik e kr skta like Dropping droplets in kettle lkn aik-aik/Katra-Katra kr k
-Focus on what is in my control now to do.
Manzil di fikr nahi, safr di chass lawo, distraction to bach kay
Distraction → wo kam Jo priority of the time ki activity ko disturb kry...
What is the most precious and necessary thing to do now.
Safr ch gum hoja(chass ly) k time da pta na chaly
Related to PRESENT (na past na future)
Front thing focused, ird gird ni sochna k tub ye hua ya ye hoga, ya ye horha hai
Agr lgta ha k hoskta hai to bs start krdo or krdy ravo, ice will melt jani
No confusion(pta ni hoyega k ni), doubt is hell
No jealousy
-Pick good and get better
No time estimation, bs km hona chahi da jitna hojay otna e sahi, baki wapsi ty krnla ga
No pain, difficulty(pervah e koi ni)
No comparison
-Everyone has their own route and life ingredients, ty tenu ki, tu ty apna kam kar.
`],
    ['48. Talk / Discus', `
Self talk of what you are doing
With others:
-Ideas   OK
-People not
-Events not
-Useless not
-To the point
`],
  ]),

  abcChapter('U', '???', [['49. U _ ???', `
???
`]]),

  abcChapter('V', 'Victories', [['50. 4-requirement/Victories per day', `
1. Physical
2. Mental
3. Spiritual
4. Financial
`]]),

  abcChapter('W', 'Write / Worry / Work-Harder', [
    ['51. Write', `
1. To-do list
2. Stuck in any decision
3. While you are calling on phone
4. Deciding something serious
5. Any problem around
6. Learning practice daily weekly or monthly
7. Write what you are doing on Laptop
`],
    ['52. Don’t Worry (sb se pehly apne ghabraana ni)', `
Failure is the gatekeeper of destiny
Failure is proof that you’re trying
Fail again, fail better
Thokra badama nalo tez hundiya
Theedy bht changy ny
Difficulty will increase with time. Admit it.
`],
    ['53. Work-Harder', `
Not to earn but to grow you in that field and become pawa
Because talent without hard work is nothing
Hard work can bear talent
`],
  ]),

  abcChapter('X', '???', [['54. X _ ???', `
???
`]]),

  abcChapter('Y', '???', [['55. Y _ ???', `
???
`]]),

  abcChapter('Z', 'Zikr', [['56. Zikr', `
Alhamdulillah in every situation (good or bad)
AstagfiRullah while irrelevant thoughts
`]]),
];
