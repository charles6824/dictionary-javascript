const input = document.getElementById('search')
const btn = document.getElementById('btn')
const content = document.getElementById('content')
content.innerHTML = `Content will appear here`

const words = [
  {
    title: "fight",
    meaning: "To beat of hit someone",
    example: "He fought back against the attacker.",
    type: "verb",
    synonyms:  ["battle","struggle"],
  },
  {
    title: "run away",
    meaning:  "To leave a place quickly, often in fear or to escape danger",
    example: "She ran away from home when she was bullied by her classmates.",
    type:  "verb",
    synonyms:  ["escape","flee"]
  },
  {
    title: "eat",
    meaning:  "To consume food and drink for nourishment",
    example:  "They sat down to eat dinner together.",
    type:  "verb",
    synonyms: ['swallow']
  },
  {
    title:"education",
    meaning:  "The process of learning through instruction, study, and practice.",
    example: "She is very passionate about education and wants to become an educator.",
    type: "noun",
    synonyms:  ["Learning", "Academy"],
  },
  {
    title: "happy",
    meaning:  "Feeling or showing pleasure or satisfaction.",
    example:  "After winning the lottery, they were both happy and relieved.",
    type:  "adjective",
    synonyms: ["joyful","pleased","content"]
  }
]

btn.addEventListener("click", (e) => {
  e.preventDefault()
  let searchValue = input.value;

  let result = words.find(word => word.title === String(searchValue).toLowerCase())

  if(result){
    content.innerHTML = `
    <h3 id="word">${String(result.title).toUpperCase()}</h3>
    <p class="def">${result.meaning}</p>
    <i>${result.synonyms}</i>
    <p class="eg">${result.example}</p>
    `
    input.value = ''
  }else{
    content.innerHTML = `
    <h3 id="word">${searchValue} was not found</h3>
    `
  }
})

