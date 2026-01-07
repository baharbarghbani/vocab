  const VOCAB = [
    { w:"Mitigate", d:"make less severe" },
    { w:"Uphold", d:"support" },
    { w:"Fortify", d:"provide (a place) with defensive works as protection against attack.", e:"This ruined hilltop castle was fortified by every ruler from Roman times to the 17th century." },
    { w:"Apprehensions", d:"anxiety or fear that something bad or unpleasant will happen." },
    { w:"Imperative", d:"necessary" },
    { w:"Stringent", d:"(of regulations, requirements, or conditions) strict, precise, and exacting." },
    { w:"Adhere", d:"believe in and follow the practices of." },
    { w:"Proactive", d:"(of a person or action) creating or controlling a situation rather than just responding to it after it has happened." },
    { w:"Integrity", d:"the quality of being honest and having strong moral principles." },
    { w:"Autonomous", d:"independent" },
    { w:"Yield", d:"produce or provide (a natural, agricultural, or industrial product)." },
    { w:"Hearse", d:"a vehicle for conveying the coffin at a funeral" },
    { w:"Wrath", d:"extreme anger" },
    { w:"Wicked", d:"evil or morally bad" },
    { w:"Prosper", d:"succeed in material terms; be financially successful" },
    { w:"Roster", d:"a list of people's names, often with the jobs they have been given to do" },
    { w:"Smug", d:"too pleased or satisfied about something you have achieved or something you know" },
    { w:"Exoneration", d:"the act of showing or stating that someone or something is not guilty of something" },
    { w:"Attic", d:"the space or room at the top of a building, under the roof, often used for storing things" },
    { w:"Infamy", d:"the quality of being famous for something considered bad" },
    { w:"Exertion", d:"physical or mental effort" },
    { w:"Leverage", d:"use sth to maximum advantage" },
    { w:"Infrastructure", d:"the basic physical and organizational structures and facilities (buildings, roads, …) needed for the operation of a society or enterprise." },
    { w:"Whirlwind", d:"a column of air moving rapidly round and round in a cylindrical or funnel shape" },
    { w:"Remnant", d:"a part of quantity that is left after the greater part has been used, removed, or destroyed" },
    { w:"Rule of thumb", d:"a practical and approximate way of doing or measuring sth" },
    { w:"Fragmentation", d:"the process or state of breaking or being broken into fragments." },
    { w:"Fragment", d:"a small part broken off or separated from something." },
    { w:"Audit", d:"to make an official examination of the accounts of a business and produce a report" },
    { w:"Integrate", d:"to combine two or more things in order to become more effective" },
    { w:"Deteriorate", d:"to become worse" },
    { w:"Improvise", d:"create and perform (music, drama, or verse) spontaneously or without preparation." },
    { w:"Put forward / put forth", d:"to suggest an idea for consideration" },
    { w:"Artefact", d:"something observed in a scientific investigation or experiment that is not naturally present but occurs as a result of the preparative or investigative procedure." },
    { w:"Manufacture", d:"make (something) on a large scale using machinery." },
    { w:"Inference", d:"a belief or opinion that you develop from the information that you know" },
    { w:"Exploit", d:"to use something in a way that helps you" },
    { w:"Accelerate", d:"If a person or object accelerates, he, she, or it goes faster." },
    { w:"Constrain", d:"to control and limit something" },
    { w:"Inherently", d:"in a way that exists as a natural or basic part of something" },
    { w:"Quantify", d:"express or measure" },
    { w:"Discriminant", d:"a distinguishing feature or characteristic." },
    { w:"Constitute", d:"be (a part) of a whole." },
    { w:"Quantitative", d:"relating to, measuring, or measured by the quantity of something rather than its quality." },
    { w:"Intercept", d:"to stop and catch something or someone before that thing or person is able to reach a particular place" },
    { w:"State-of-the-art", d:"the most recent stage in the development of a product, incorporating the newest technology, ideas, and features." },
    { w:"Pervasive", d:"present or noticeable in every part of a thing or place" },
    { w:"Fusion", d:"the process or result of joining two or more things together to form a single entity." },
    { w:"Evolve", d:"develop gradually" },
    { w:"Semantically", d:"in a way that is connected with the meaning of words" },
    { w:"Ambiguous", d:"open to more than one interpretation; not having one obvious meaning." },
    { w:"Breach", d:"an act of breaking or failing to observe a law, agreement, or code of conduct." },
    { w:"Advocate", d:"publicly recommend or support." },
    { w:"Tier", d:"one of several levels or layers" },
    { w:"Convict", d:"to decide officially in a law court that someone is guilty of a crime" },
    { w:"Controversy", d:"a lot of disagreement or argument about something, usually because it affects or is important to many people" },
    { w:"Elapse", d:"(of time) pass or go by" },
    { w:"Alleviate", d:"make less severe" },
    { w:"Pretentious", d:"trying to appear or sound more important or clever than you are, especially in matters of art and literature" },
    { w:"Diction", d:"the manner in which words are pronounced" },
    { w:"Enliven", d:"to make more interesting or active" },
    { w:"Interdisciplinary", d:"relating to more than one branch of knowledge." },
    { w:"Mammal", d:"پستاندار" },
    { w:"Fervor", d:"intense and passionate feeling." },
    { w:"Authenticity", d:"the quality of being authentic." },
    { w:"Attributable", d:"regarded as being caused by." },
    { w:"Propensity", d:"the fact that someone is likely to behave in a particular way, especially a bad way" },
    { w:"Invigorate", d:"to make someone feel fresher, healthier, and more energetic" },
    { w:"From far and wide", d:"from a large number of places" },
    { w:"Conscript", d:"to force someone to serve in an army or one of a country's armed forces" },
    { w:"Pay for itself", d:"If something pays for itself, it works so well that it saves the same amount of money that it costs" },
    { w:"Peasant", d:"a person who owns or rents a small piece of land and grows crops, keeps animals, etc. on it, especially one who has a low income, very little education, and a low social position." },
    { w:"Conservation", d:"the protection of plants and animals, natural areas, and interesting and important structures and buildings, especially from the damaging effects of human activity" },
    { w:"Captivity", d:"the situation in which a person or animal is kept somewhere and is not allowed to leave" },
    { w:"Poach", d:"to catch or kill an animal without permission on someone else’s property, or to kill animals illegally to get valuable parts of them" },
    { w:"Biodegradable", d:"able to decay naturally and in a way that is not harmful" },
    { w:"Decay", d:"to become gradually damaged, worse, or less; to cause something to do this" },
    { w:"Tumble driver", d:"(You may want to add a definition here.)" },
    { w:"Deteriorate", d:"to become worse" }
  ];

  const els = {
    q: document.getElementById("q"),
    list: document.getElementById("list"),
    empty: document.getElementById("empty"),
    count: document.getElementById("count"),
    toggleSort: document.getElementById("toggleSort"),
    toggleAll: document.getElementById("toggleAll"),
    add: document.getElementById("add")
  };

  let sortAZ = true;
  let expanded = false;

  function normalize(s){ return (s || "").toLowerCase().trim(); }

  function dedupeKeepFirst(items){
    // Optional: keep first definition per word (case-insensitive)
    const seen = new Set();
    const out = [];
    for (const it of items){
      const key = normalize(it.w);
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(it);
    }
    return out;
  }

  // Choose: keep duplicates (false) or remove duplicates (true)
  const REMOVE_DUPLICATES = true;
  const DATA = REMOVE_DUPLICATES ? dedupeKeepFirst(VOCAB) : VOCAB;

  function edit(e, it){
    const newWord = prompt("Edit word:", it.w);
    if (newWord === null) return;
    it.w = newWord.trim();
    const newDef = prompt(`Edit definition for "${it.w}":`, it.d);
    if (newDef !== null){
      it.d = newDef.trim();
    }
    if ("e" in it){
      const newExample = prompt(`Edit example sentence for "${it.w}":`, it.e);
      if (newExample !== null){
        it.e = newExample.trim();
      }
    } else {
      const newExample = prompt(`(Optional) Enter an example sentence for "${it.w}":`);
      if (newExample){
        it.e = newExample.trim();
      }
    }
    render();
  }


  function render(){
    const q = normalize(els.q.value);
    let items = DATA.filter(it => {
      const w = normalize(it.w);
      const d = normalize(it.d);
      return !q || w.includes(q) || d.includes(q);
    });

    items.sort((a,b) => {
      if (!sortAZ) return 0;
      return normalize(a.w).localeCompare(normalize(b.w));
    });

    els.list.innerHTML = "";
    els.empty.hidden = items.length !== 0;
    els.count.textContent = items.length.toString();

    const frag = document.createDocumentFragment();

    for (const it of items){
      const details = document.createElement("details");
      details.className = "card";
      details.open = expanded;

      const summary = document.createElement("summary");

      const left = document.createElement("div");
      left.className = "term";

      const word = document.createElement("div");
      word.className = "word";
      word.textContent = it.w;

      const hint = document.createElement("div");
      hint.className = "hint";
      hint.textContent = it.d;


      left.appendChild(word);
      left.appendChild(hint);

      const chev = document.createElement("div");
      chev.className = "chev";
      chev.setAttribute("aria-hidden","true");
      chev.textContent = "⌄";

      const edit_button = document.createElement("button");
      edit_button.textContent = "Edit";
      edit_button.className = "editButton";
      edit_button.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        edit(e, it);
      });
      summary.appendChild(left);
      summary.appendChild(chev);

      const body = document.createElement("div");
      body.className = "body";

      const def = document.createElement("p");
      def.className = "def";
      def.textContent = it.d;

      const example = document.createElement("p");
      example.className = "example";
      example.textContent = it.e;

      body.appendChild(def);
      body.appendChild(example);


      const meta = document.createElement("div");
      meta.className = "metaRow";

      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = "Tap title to collapse/expand";

      const small = document.createElement("span");
      small.className = "small";
      small.textContent = "Tip: use search to find words fast.";

      meta.appendChild(tag);
      meta.appendChild(small);

      body.appendChild(def);
      body.appendChild(meta);
      body.appendChild(edit_button);

      details.appendChild(summary);
      details.appendChild(body);

      frag.appendChild(details);
    }

    els.list.appendChild(frag);
  }

  els.q.addEventListener("input", render);

  els.toggleSort.addEventListener("click", () => {
    sortAZ = !sortAZ;
    els.toggleSort.textContent = sortAZ ? "Sort: A–Z" : "Sort: (none)";
    els.toggleSort.setAttribute("aria-pressed", String(sortAZ));
    render();
  });

  els.toggleAll.addEventListener("click", () => {
    expanded = !expanded;
    els.toggleAll.textContent = expanded ? "Collapse all" : "Expand all";
    render();
  });

  els.add.addEventListener("click", () => {
    const word = prompt("Enter the new word:");
    if (!word) return;
    const def = prompt(`Enter the definition for "${word}":`);
    if (!def) return;
    const example = prompt(`(Optional) Enter an example sentence for "${word}":`);
    if (example){
      DATA.push({ w: word.trim(), d: def.trim(), e: example.trim() });
    } else {
      DATA.push({ w: word.trim(), d: def.trim() });
    }
    render();
  });

  render();