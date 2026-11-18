// =========================================================================
    // CONFIGURAÇÃO DE ÍCONES (MINECRAFT WIKI + FALLBACK PROCEDURAL PIXELADO)
    // =========================================================================
    const WIKI_BASE = 'https://minecraft.wiki/images/';

    // =========================================================================
    // LISTA OFICIAL DOS 24 GATES DE RECEITAS / PROGRESSÃO (ARCHIPELAGO 26.2)
    // =========================================================================
    const AP_GATES = [
      { id: 'tools1', name: 'Progressive Tools (1)', desc: 'Picareta, Pá e Enxada de Pedra / Cobre' },
      { id: 'tools2', name: 'Progressive Tools (2)', desc: 'Picareta, Pá e Enxada de Ferro' },
      { id: 'tools3', name: 'Progressive Tools (3)', desc: 'Ferramentas de Diamante + Netherite Ingot' },
      { id: 'weapons1', name: 'Progressive Weapons (1)', desc: 'Espada, Machado e Lança de Pedra / Cobre' },
      { id: 'weapons2', name: 'Progressive Weapons (2)', desc: 'Espada, Machado e Lança de Ferro' },
      { id: 'weapons3', name: 'Progressive Weapons (3)', desc: 'Espada, Machado e Lança de Diamante' },
      { id: 'armor1', name: 'Progressive Armor (1)', desc: 'Armadura completa de Ferro' },
      { id: 'armor2', name: 'Progressive Armor (2)', desc: 'Armadura completa de Diamante' },
      { id: 'res1', name: 'Resource Crafting (1)', desc: 'Furnace, Blast Furnace, Copper Ingot, Nuggets' },
      { id: 'res2', name: 'Resource Crafting (2)', desc: 'Blocos de minério/gema, Glowstone, Anvil, Resin Block' },
      { id: 'shield', name: 'Shield', desc: 'Receita do Escudo' },
      { id: 'bed', name: 'Bed', desc: 'Receita de todas as Camas' },
      { id: 'campfire', name: 'Campfire', desc: 'Receita de Fogueira e Soul Campfire' },
      { id: 'archery', name: 'Archery', desc: 'Receita de Arco, Flecha e Besta (Crossbow)' },
      { id: 'bucket', name: 'Bucket', desc: 'Receita do Balde' },
      { id: 'flint', name: 'Flint and Steel', desc: 'Receita de Pederneira' },
      { id: 'bottles', name: 'Bottles', desc: 'Receita de Frasco de Vidro (Glass Bottle)' },
      { id: 'brewing', name: 'Brewing', desc: 'Receita de Blaze Powder e Brewing Stand' },
      { id: 'enchanting', name: 'Enchanting', desc: 'Receita de Enchanting Table e Bookshelf' },
      { id: 'fishing', name: 'Fishing Rod', desc: 'Vara de Pesca, Carrot/Warped Fungus on a Stick' },
      { id: 'saddle', name: 'Saddle', desc: 'Receita de Sela' },
      { id: 'brush', name: 'Brush', desc: 'Receita de Pincel (Arqueologia / Tatu)' },
      { id: 'spyglass', name: 'Spyglass', desc: 'Receita de Luneta (+ dá 1 Amethyst)' },
      { id: 'lead', name: 'Lead', desc: 'Receita de Laço' }
    ];

    const GROUPS = {
      phases: [
        {
          id: 'phase0',
          label: 'Fase 0: Sem Gates',
          icon: 'Invicon_Wooden_Pickaxe.png',
          desc: 'Advancements sem receitas bloqueadas e fáceis de obter por exploração, combate simples ou itens encontrados em loot.'
        },
        {
          id: 'phase1',
          label: 'Fase 1: Exploração & Loot',
          icon: 'Invicon_Compass.png',
          desc: 'Advancements que dependem de explorar estruturas, encontrar itens em loot ou receber gates básicos de exploração.'
        },
        {
          id: 'phase2',
          label: 'Fase 2: Um Gate Fácil',
          icon: 'Invicon_Iron_Pickaxe.png',
          desc: 'Advancements com apenas um gate necessário e execução relativamente direta.'
        },
        {
          id: 'phase3',
          label: 'Fase 3: Um Gate Demorado',
          icon: 'Invicon_Diamond_Pickaxe.png',
          desc: 'Advancements com um gate, mas que exigem preparação, viagem ou várias etapas.'
        },
        {
          id: 'phase4',
          label: 'Fase 4: Equipamento Máximo',
          icon: 'Invicon_Netherite_Pickaxe.png',
          desc: 'Advancements que exigem ferramentas, armas, armaduras ou recursos no nível máximo.'
        },
        {
          id: 'phase5',
          label: 'Fase 5: Pós-Game',
          icon: 'Invicon_Dragon_Egg.png',
          desc: 'Conteúdo pós-Dragon, Ender Dragon, Shards da meta, Wither e Beacon/Beaconator.'
        }
      ],
      locations: [
        {
          id: 'overworld_surface',
          label: 'Overworld',
          icon: 'Invicon_Grass_Block.png',
          desc: 'Superfície geral do Overworld, biomas, fazendas e progressão livre.'
        },
        {
          id: 'villages',
          label: 'Vilas & Mansões',
          icon: 'Invicon_Emerald.png',
          desc: 'Vilas, trocas, raids, Pillagers, Evokers, Outposts e Mansões.'
        },
        {
          id: 'mountains',
          label: 'Montanhas & Prados',
          icon: 'Invicon_Goat_Horn.png',
          desc: 'Montanhas, Meadows, cabras, Snowy Slopes e neve fofa.'
        },
        {
          id: 'caves',
          label: 'Cavernas',
          icon: 'Invicon_Stone_Pickaxe.png',
          desc: 'Cavernas comuns, Lush Caves e exploração subterrânea.'
        },
        {
          id: 'deep_dark',
          label: 'Deep Dark',
          icon: 'Invicon_Sculk_Catalyst.png',
          desc: 'Ancient Cities, Sculk Sensors, Catalysts e Warden.'
        },
        {
          id: 'stronghold',
          label: 'Stronghold',
          icon: 'Invicon_End_Portal_Frame.png',
          desc: 'Fortalezas, olhos de Ender e portal do End.'
        },
        {
          id: 'trial_chambers',
          label: 'Trial Chambers',
          icon: 'Invicon_Trial_Key.png',
          desc: 'Breeze, Vaults, Ominous Trials, Mace, Crafter e armadilhas.'
        },
        {
          id: 'pale_garden',
          label: 'Pale Garden',
          icon: 'Invicon_Creaking_Heart.png',
          desc: 'Creaking, Pale Oak e Creaking Heart.'
        },
        {
          id: 'ocean',
          label: 'Oceanos',
          icon: 'Invicon_Heart_of_the_Sea.png',
          desc: 'Oceanos, pesca, Afogados, Axolotls e estruturas oceânicas.'
        },
        {
          id: 'ocean_ruins',
          label: 'Ruínas Oceânicas',
          icon: 'Invicon_Suspicious_Sand.png',
          desc: 'Ocean Ruins, Warm Ocean Ruins, Sniffers e arqueologia.'
        },
        {
          id: 'nether',
          label: 'Nether',
          icon: 'Invicon_Netherrack.png',
          desc: 'Biomas do Nether, Striders, Ghasts, Piglins e progressão geral.'
        },
        {
          id: 'nether_fortress',
          label: 'Fortalezas do Nether',
          icon: 'Invicon_Nether_Bricks.png',
          desc: 'Fortalezas, Blazes, Wither Skeletons e itens necessários ao preparo do End.'
        },
        {
          id: 'bastions',
          label: 'Bastions',
          icon: 'Invicon_Polished_Blackstone_Bricks.png',
          desc: 'Bastion Remnants, Piglins, baús raros e saque de Nether.'
        },
        {
          id: 'end_main',
          label: 'End Principal',
          icon: 'Invicon_End_Portal_Frame.png',
          desc: 'Ilha principal, Ender Dragon, Dragon Egg e End Gateway.'
        },
        {
          id: 'end_cities',
          label: 'End Cities',
          icon: 'Invicon_Purpur_Block.png',
          desc: 'Ilhas externas, End Ships, Elytra, Shulkers e Levitation.'
        }
      ],
      vanilla: [
        { id: 'Minecraft', label: 'Minecraft (16)', icon: 'Invicon_Grass_Block.png', desc: 'Aba principal de progressão da história do jogo.' },
        { id: 'Nether', label: 'Nether (23)', icon: 'Invicon_Red_Nether_Bricks.png', desc: 'Aba de conquistas ligadas ao Nether, poções, Beacons e Wither.' },
        { id: 'The End', label: 'The End (9)', icon: 'Invicon_End_Stone.png', desc: 'Aba de conquistas do Ender Dragon e End Cities.' },
        { id: 'Adventure', label: 'Adventure (47)', icon: 'Invicon_Map.png', desc: 'Aba de exploração, combate, estruturas, Trial Chambers e trocas.' },
        { id: 'Husbandry', label: 'Husbandry (31)', icon: 'Invicon_Hay_Bale.png', desc: 'Aba de animais, agricultura, abelhas, Sniffers e alimentação.' }
      ]
    };

    // =========================================================================
    // BANCO COMPLETO DOS 126 ADVANCEMENTS (JAVA 26.2 / NEOFORGEAP v2.2.1)
    // =========================================================================
    let ADVANCEMENTS = [];

    function parseCSV(text) {
      const rows = [];
      let row = [];
      let field = '';
      let quoted = false;
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === '"') {
          if (quoted && text[i + 1] === '"') { field += '"'; i++; }
          else quoted = !quoted;
        } else if (char === ',' && !quoted) {
          row.push(field);
          field = '';
        } else if ((char === '\n' || char === '\r') && !quoted) {
          if (char === '\r' && text[i + 1] === '\n') i++;
          row.push(field);
          if (row.some((value) => value.length > 0)) rows.push(row);
          row = [];
          field = '';
        } else {
          field += char;
        }
      }
      if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
      return rows;
    }

    async function loadAdvancements() {
      const response = await fetch('./advancements.csv', { cache: 'no-store' });
      if (!response.ok) throw new Error('Falha ao carregar CSV: ' + response.status);
      const rows = parseCSV(await response.text());
      const headers = rows.shift();
      ADVANCEMENTS = rows.map((values) => {
        const item = {};
        headers.forEach((header, index) => { item[header] = values[index] ?? ''; });
        item.gates = item.gates ? item.gates.split('|') : [];
        item.postgame = item.postgame === 'true';
        return item;
      });
    }

    // =========================================================================
    // ESTADO & PERSISTÊNCIA EM CACHE (LOCALSTORAGE + FALLBACK)
    // =========================================================================
    const STORAGE_KEY = 'ap_mc_tracker_26_2_state_v2';
    const GOAL_TARGET = 114;

    let state = {
      completed: {},
      unlockedGates: {},
      groupMode: 'phases',
      activeTab: 'phase0',
      statusFilter: 'all',
      hideHard: false,
      hideUnreasonable: true,
      searchQuery: ''
    };

    function loadState() {
      let raw = null;
      try {
        raw = localStorage.getItem(STORAGE_KEY);
      } catch (e) {
        raw = null;
      }
      if (!raw && window.name && window.name.startsWith('AP_MC_STATE:')) {
        raw = window.name.slice('AP_MC_STATE:'.length);
      }
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          state = {
            ...state,
            ...parsed,
            completed: parsed.completed || {},
            unlockedGates: parsed.unlockedGates || {}
          };
        } catch (err) {
          console.warn('Falha ao ler cache salvo:', err);
        }
      }
    }

    function saveState() {
      const serialized = JSON.stringify(state);
      try {
        localStorage.setItem(STORAGE_KEY, serialized);
      } catch (e) {
        // Fallback para iframes sem localStorage
      }
      try {
        window.name = 'AP_MC_STATE:' + serialized;
      } catch (e) {}

      const badge = document.getElementById('cache-status-badge');
      if (badge) {
        badge.textContent = 'Cache Salvo';
        badge.style.opacity = '1';
      }
    }

    // =========================================================================
    // AUXILIARES DE GATES E FILTRAGEM
    // =========================================================================
    function isAdvUnlockedByGates(adv) {
      if (!adv.gates || adv.gates.length === 0) return true;
      return adv.gates.every(g => !!state.unlockedGates[g]);
    }

    function getGateName(gateId) {
      const found = AP_GATES.find(g => g.id === gateId);
      return found ? found.name : gateId;
    }

    function isAdvInYamlPool(adv) {
      if (state.hideUnreasonable && adv.diff === 'unreasonable') return false;
      if (state.hideHard && adv.diff === 'hard') return false;
      return true;
    }

    function matchesFilters(adv) {
      if (!isAdvInYamlPool(adv)) return false;

      const isDone = !!state.completed[adv.id];
      const gateOk = isAdvUnlockedByGates(adv);

      if (state.statusFilter === 'unlocked_only' && !gateOk) return false;
      if (state.statusFilter === 'pending' && isDone) return false;
      if (state.statusFilter === 'done' && !isDone) return false;
      if (state.statusFilter === 'hard' && adv.diff !== 'hard') return false;
      if (state.statusFilter === 'postgame' && !adv.postgame) return false;

      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const hay = `${adv.name} ${adv.desc} ${adv.req} ${adv.tab}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    }

    // =========================================================================
    // RENDERIZAÇÃO DE GATES, ABAS, GRADE E CONTADORES
    // =========================================================================
    function renderGatesPanel() {
      const grid = document.getElementById('gates-grid');
      const countEl = document.getElementById('gates-unlocked-count');
      grid.innerHTML = '';

      let unlockedCount = 0;
      AP_GATES.forEach(gate => {
        const isUnlocked = !!state.unlockedGates[gate.id];
        if (isUnlocked) unlockedCount++;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `gate-chip ${isUnlocked ? 'unlocked' : ''}`;
        btn.title = `${gate.name}: ${gate.desc}`;
        btn.innerHTML = `<span>${isUnlocked ? '✓' : '✕'}</span><span>${gate.name}</span>`;
        btn.onclick = () => {
          state.unlockedGates[gate.id] = !state.unlockedGates[gate.id];
          saveState();
          renderAll();
        };
        grid.appendChild(btn);
      });

      countEl.textContent = `${unlockedCount} / ${AP_GATES.length}`;
    }

    function updateProgressBar() {
      const poolAdvs = ADVANCEMENTS.filter(isAdvInYamlPool);
      const doneInPool = poolAdvs.filter(a => !!state.completed[a.id]).length;
      const remaining = Math.max(0, GOAL_TARGET - doneInPool);
      const pct = Math.min(100, (doneInPool / GOAL_TARGET) * 100);

      const counterEl = document.getElementById('counter-text');
      const poolEl = document.getElementById('active-pool-count');
      const remEl = document.getElementById('remaining-goal-count');
      const fillEl = document.getElementById('xp-bar-fill');

      counterEl.textContent = `${doneInPool} / ${GOAL_TARGET}`;
      poolEl.textContent = poolAdvs.length;
      remEl.textContent = remaining;
      fillEl.style.width = `${pct}%`;

      if (doneInPool >= GOAL_TARGET) {
        counterEl.classList.remove('text-[#80ff20]');
        counterEl.classList.add('text-[#ffbb33]');
        fillEl.classList.add('goal-reached');
      } else {
        counterEl.classList.add('text-[#80ff20]');
        counterEl.classList.remove('text-[#ffbb33]');
        fillEl.classList.remove('goal-reached');
      }
    }

    function renderTabs() {
      const tabsContainer = document.getElementById('group-tabs');
      tabsContainer.innerHTML = '';

      const list = GROUPS[state.groupMode] || GROUPS.phases;
      if (!list.some(g => g.id === state.activeTab)) {
        state.activeTab = list[0].id;
      }

      list.forEach(group => {
        const groupAdvs = ADVANCEMENTS.filter(a => {
          if (!isAdvInYamlPool(a)) return false;
          if (state.groupMode === 'phases') return a.phase === group.id;
          if (state.groupMode === 'locations') return a.loc === group.id;
          return a.tab === group.id;
        });
        const doneCount = groupAdvs.filter(a => !!state.completed[a.id]).length;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `mc-tab px-3 py-2 text-lg flex items-center gap-2 ${state.activeTab === group.id ? 'active' : ''}`;
        btn.innerHTML = `
          <img src="${WIKI_BASE}${group.icon}" class="w-5 h-5" alt="" onerror="handleIconError(this, '${group.label.charAt(0)}', '#ffaa00')" />
          <span>${group.label}</span>
          <span class="text-sm px-1.5 bg-black/60 border border-black ${doneCount === groupAdvs.length && groupAdvs.length > 0 ? 'text-[#ffaa00]' : 'text-gray-300'}">
            ${doneCount}/${groupAdvs.length}
          </span>
        `;
        btn.onclick = () => {
          state.activeTab = group.id;
          saveState();
          renderAll();
        };
        tabsContainer.appendChild(btn);
      });
    }

    function renderGrid() {
      const container = document.getElementById('advancements-container');
      const titleEl = document.getElementById('current-group-title');
      const descEl = document.getElementById('current-group-desc');
      const statsEl = document.getElementById('current-group-stats');

      const list = GROUPS[state.groupMode] || GROUPS.phases;
      const currentGroup = list.find(g => g.id === state.activeTab) || list[0];

      titleEl.textContent = currentGroup.label;
      descEl.textContent = currentGroup.desc;

      // Se houver busca ativa, mostra resultados de todas as abas; senão, filtra pela aba atual
      const isSearching = state.searchQuery.trim().length > 0;
      const visibleAdvs = ADVANCEMENTS.filter(a => {
        if (!matchesFilters(a)) return false;
        if (isSearching) return true;
        if (state.groupMode === 'phases') return a.phase === currentGroup.id;
        if (state.groupMode === 'locations') return a.loc === currentGroup.id;
        return a.tab === currentGroup.id;
      });

      const doneVisible = visibleAdvs.filter(a => !!state.completed[a.id]).length;
      statsEl.textContent = isSearching
        ? `Busca global: ${doneVisible} / ${visibleAdvs.length} encontrados`
        : `Concluídos nesta aba: ${doneVisible} / ${visibleAdvs.length}`;

      container.innerHTML = '';

      if (visibleAdvs.length === 0) {
        container.innerHTML = `<div class="text-center py-12 text-gray-400 text-xl">Nenhum advancement encontrado com os filtros atuais.</div>`;
        return;
      }

      // Agrupa visualmente por Frame (Tasks, Goals, Challenges) como no menu L do Minecraft
      const buckets = [
        { key: 'task', title: 'Tasks (Tarefas)', items: visibleAdvs.filter(a => a.frame === 'task') },
        { key: 'goal', title: 'Goals (Objetivos)', items: visibleAdvs.filter(a => a.frame === 'goal') },
        { key: 'challenge', title: 'Challenges (Desafios)', items: visibleAdvs.filter(a => a.frame === 'challenge') }
      ].filter(b => b.items.length > 0);

      buckets.forEach(bucket => {
        const section = document.createElement('div');
        section.innerHTML = `<h3 class="text-base uppercase tracking-wider text-gray-400 mb-2.5 border-b border-[#262626] pb-1">${bucket.title} (${bucket.items.length})</h3>`;

        const grid = document.createElement('div');
        grid.className = 'flex flex-wrap gap-3';

        bucket.items.forEach(adv => {
          const isDone = !!state.completed[adv.id];
          const gateOk = isAdvUnlockedByGates(adv);

          const slot = document.createElement('div');
          slot.className = `adv-slot frame-${adv.frame} ${isDone ? 'done' : ''} ${!gateOk && !isDone ? 'gate-locked' : ''}`;
          slot.setAttribute('role', 'button');
          slot.setAttribute('tabindex', '0');
          slot.setAttribute('aria-label', adv.name);

          let badgeHtml = '';
          if (!gateOk && !isDone) {
            badgeHtml += `<span class="gate-lock-badge" title="Bloqueado por Gate">✕</span>`;
          }
          if (adv.diff === 'hard') {
            badgeHtml += `<span class="diff-pip hard"></span>`;
          } else if (adv.diff === 'unreasonable') {
            badgeHtml += `<span class="diff-pip unreasonable"></span>`;
          } else if (adv.postgame) {
            badgeHtml += `<span class="diff-pip postgame"></span>`;
          }

          slot.innerHTML = `
            ${badgeHtml}
            <img src="${WIKI_BASE}${adv.icon}" class="adv-icon" alt="${adv.name}" loading="lazy" onerror="handleIconError(this, '${adv.name.charAt(0)}', '#ff9900')" />
          `;

          slot.addEventListener('click', () => {
            state.completed[adv.id] = !state.completed[adv.id];
            saveState();
            updateInspector(adv);
            renderAll();
          });

          slot.addEventListener('mouseenter', (e) => {
            updateInspector(adv);
            showTooltip(e, adv);
          });

          slot.addEventListener('mousemove', moveTooltip);
          slot.addEventListener('mouseleave', hideTooltip);

          grid.appendChild(slot);
        });

        section.appendChild(grid);
        container.appendChild(section);
      });
    }

    function renderAll() {
      // Sincroniza estado visual dos botões de filtro
      document.getElementById('mode-phases').classList.toggle('active', state.groupMode === 'phases');
      document.getElementById('mode-locations').classList.toggle('active', state.groupMode === 'locations');
      document.getElementById('mode-vanilla').classList.toggle('active', state.groupMode === 'vanilla');

      const btnHard = document.getElementById('toggle-hard');
      btnHard.textContent = state.hideHard ? 'Hard: OFF' : 'Hard: ON';
      btnHard.classList.toggle('active', !state.hideHard);

      const btnUnr = document.getElementById('toggle-unreasonable');
      btnUnr.textContent = state.hideUnreasonable ? 'Ocultar Unreasonable: ON' : 'Ocultar Unreasonable: OFF';
      btnUnr.classList.toggle('active', state.hideUnreasonable);

      document.getElementById('status-filter').value = state.statusFilter;
      document.getElementById('search-input').value = state.searchQuery;

      renderGatesPanel();
      updateProgressBar();
      renderTabs();
      renderGrid();
    }

    // =========================================================================
    // TOOLTIP & INSPETOR INFERIOR
    // =========================================================================
    const tooltipEl = document.getElementById('mc-tooltip');

    function showTooltip(e, adv) {
      const isDone = !!state.completed[adv.id];
      const titleEl = document.getElementById('tt-title');
      const statusEl = document.getElementById('tt-status');
      const tagsEl = document.getElementById('tt-tags');
      const descEl = document.getElementById('tt-desc');
      const gatesBox = document.getElementById('tt-gates-box');
      const reqEl = document.getElementById('tt-req');
      const phaseEl = document.getElementById('tt-phase');
      const locEl = document.getElementById('tt-loc');

      titleEl.textContent = adv.name;
      titleEl.style.color = isDone ? '#ffaa00' : (adv.frame === 'challenge' ? '#ff55ff' : '#55ff55');

      statusEl.textContent = isDone ? 'DONE' : 'PENDENTE';
      statusEl.className = isDone
        ? 'text-sm px-1.5 border border-[#ff9900] text-[#ffbb33] bg-[#3d2200]'
        : 'text-sm px-1.5 border border-gray-400 text-gray-200 bg-black/50';

      const tags = [`<span class="px-1.5 bg-[#241247] border border-[#5c2db8] text-[#d0b8ff]">${adv.tab}</span>`];
      if (adv.diff === 'hard') tags.push('<span class="px-1.5 bg-[#471212] border border-[#ff5555] text-[#ff9999]">HARD</span>');
      if (adv.diff === 'unreasonable') tags.push('<span class="px-1.5 bg-[#3b0d3b] border border-[#d946ef] text-[#f5d0fe]">UNREASONABLE</span>');
      if (adv.postgame) tags.push('<span class="px-1.5 bg-[#0e3b47] border border-[#55ffff] text-[#a5f3fc]">PÓS-GAME</span>');
      tagsEl.innerHTML = tags.join('');

      descEl.textContent = adv.desc;

      if (adv.gates && adv.gates.length > 0) {
        const gBadges = adv.gates.map(gId => {
          const ok = !!state.unlockedGates[gId];
          return `<span class="inline-block mr-1.5 px-1.5 border ${ok ? 'border-[#55ff55] text-[#aaffaa] bg-[#163310]' : 'border-[#ff5555] text-[#ff9999] bg-[#3b1212]'}">${ok ? '✓' : '✗'} ${getGateName(gId)}</span>`;
        }).join('');
        gatesBox.innerHTML = `<div class="text-sm text-gray-300 mb-0.5">Gates Exigidos:</div>${gBadges}`;
      } else {
        gatesBox.innerHTML = `<span class="text-sm text-[#80ff20]">✓ Sem Gate de receita bloqueada</span>`;
      }

      reqEl.textContent = adv.req;
      const pObj = GROUPS.phases.find(p => p.id === adv.phase);
      const lObj = GROUPS.locations.find(l => l.id === adv.loc);
      phaseEl.textContent = pObj ? pObj.label.split(':')[0] : '';
      locEl.textContent = lObj ? lObj.label : '';

      tooltipEl.style.display = 'block';
      moveTooltip(e);
    }

    function moveTooltip(e) {
      const pad = 16;
      const rect = tooltipEl.getBoundingClientRect();
      let left = e.clientX + pad;
      let top = e.clientY + pad;

      if (left + rect.width > window.innerWidth - 10) {
        left = e.clientX - rect.width - pad;
      }
      if (top + rect.height > window.innerHeight - 10) {
        top = window.innerHeight - rect.height - 10;
      }
      tooltipEl.style.left = Math.max(8, left) + 'px';
      tooltipEl.style.top = Math.max(8, top) + 'px';
    }

    function hideTooltip() {
      tooltipEl.style.display = 'none';
    }

    function updateInspector(adv) {
      const isDone = !!state.completed[adv.id];
      const slot = document.getElementById('inspector-slot');
      const icon = document.getElementById('inspector-icon');
      const title = document.getElementById('inspector-title');
      const badges = document.getElementById('inspector-badges');
      const desc = document.getElementById('inspector-desc');

      slot.className = `adv-slot frame-${adv.frame} ${isDone ? 'done' : ''} shrink-0`;
      icon.src = WIKI_BASE + adv.icon;
      title.textContent = `${adv.name} (${isDone ? 'DONE' : 'Pendente'})`;
      title.style.color = isDone ? '#ffaa00' : '#ffff55';

      let bHtml = '';
      if (adv.diff === 'hard') bHtml += '<span class="text-sm px-1.5 bg-[#471212] border border-[#ff5555] text-[#ff9999]">HARD</span>';
      if (adv.postgame) bHtml += '<span class="text-sm px-1.5 bg-[#0e3b47] border border-[#55ffff] text-[#a5f3fc]">PÓS-GAME</span>';
      badges.innerHTML = bHtml;

      desc.textContent = `${adv.desc} — ${adv.req}`;
    }

    // =========================================================================
    // CONTROLES DE UI, MODAL E BACKUP JSON
    // =========================================================================
    function setGroupMode(mode) {
      state.groupMode = mode;
      const list = GROUPS[mode];
      if (list && list.length > 0) {
        state.activeTab = list[0].id;
      }
      saveState();
      renderAll();
    }

    function onFilterChange() {
      state.statusFilter = document.getElementById('status-filter').value;
      saveState();
      renderAll();
    }

    function toggleHideHard() {
      state.hideHard = !state.hideHard;
      saveState();
      renderAll();
    }

    function toggleHideUnreasonable() {
      state.hideUnreasonable = !state.hideUnreasonable;
      saveState();
      renderAll();
    }

    function onSearchInput() {
      state.searchQuery = document.getElementById('search-input').value;
      saveState();
      renderGrid();
    }

    function toggleAllGates(val) {
      AP_GATES.forEach(g => {
        state.unlockedGates[g.id] = val;
      });
      saveState();
      renderAll();
    }

    function openModal({ title, body, showTextarea = false, textareaValue = '', onConfirm }) {
      const modal = document.getElementById('mc-modal');
      document.getElementById('modal-title').textContent = title;
      document.getElementById('modal-body').textContent = body;

      const ta = document.getElementById('modal-textarea');
      if (showTextarea) {
        ta.classList.remove('hidden');
        ta.value = textareaValue;
      } else {
        ta.classList.add('hidden');
      }

      const confirmBtn = document.getElementById('modal-confirm');
      confirmBtn.onclick = () => {
        if (onConfirm) onConfirm(ta.value);
        closeModal();
      };

      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeModal() {
      const modal = document.getElementById('mc-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function resetAllConfirm() {
      openModal({
        title: 'Resetar Progresso e Gates',
        body: 'Tem certeza que deseja limpar todos os advancements marcados e todos os gates desbloqueados?',
        onConfirm: () => {
          state.completed = {};
          state.unlockedGates = {};
          saveState();
          renderAll();
        }
      });
    }

    function exportProgress() {
      const json = JSON.stringify({ completed: state.completed, unlockedGates: state.unlockedGates }, null, 2);
      openModal({
        title: 'Exportar Backup JSON',
        body: 'Copie o texto abaixo para salvar ou transferir seu progresso para outro navegador:',
        showTextarea: true,
        textareaValue: json,
        onConfirm: () => {
          const ta = document.getElementById('modal-textarea');
          ta.select();
          document.execCommand('copy');
        }
      });
    }

    function importProgressPrompt() {
      openModal({
        title: 'Importar Backup JSON',
        body: 'Cole abaixo o JSON exportado anteriormente:',
        showTextarea: true,
        textareaValue: '',
        onConfirm: (val) => {
          try {
            const parsed = JSON.parse(val);
            if (parsed && typeof parsed === 'object') {
              state.completed = parsed.completed || {};
              state.unlockedGates = parsed.unlockedGates || {};
              saveState();
              renderAll();
            }
          } catch (e) {
            // Ignora JSON inválido sem travar a UI
          }
        }
      });
    }

    // Inicializa ao carregar a página
    window.addEventListener('DOMContentLoaded', async () => {
      try {
        await loadAdvancements();
        loadState();
        renderAll();
      } catch (error) {
        console.error(error);
        document.getElementById('advancements-container').innerHTML =
          '<div class="text-center py-12 text-red-300 text-xl">Não foi possível carregar o arquivo advancements.csv.</div>';
      }
    });
