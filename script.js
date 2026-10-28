const linkGroups = [];
for (const link of window.zbookLinks || []) {
  let group = linkGroups.find((item) => item.title === link.group);
  if (!group) {
    group = { title: link.group, items: [] };
    linkGroups.push(group);
  }
  group.items.push({ term: link.name, detail: link.use, example: link.example, url: link.url });
}

const departments = {
  biology: {
    name: 'Biology',
    chapters: [
      {
        title: 'Code Editors types',
        heading: 'Code editors par kaam karne ke 8 tareeqay',
        definition: 'Code editors mukhtalif qisamon aur andaazon ke hote hain. Yeh categories batati hain ke editor kaise kaam karta hai aur kis tarah madad deta hai.',
        concept: 'CODE EDITORS KI QISMEIN',
        editorTypes: [
          { icon: '&gt;_', style: 'terminal-card', title: 'Terminal-based editors', definition: 'Terminal ya command line ke andar chalte hain. Halke aur tez hote hain.', examples: ['Vim', 'Neovim', 'Nano', 'Emacs', 'Vi', 'Micro', 'Helix', 'Kakoune', 'Pico', 'Joe', 'Jed'] },
          { icon: '▣', style: 'gui-card', title: 'GUI-based editors', definition: 'Windows, menus aur buttons wala graphical interface dete hain. Istemaal mein asaan aur dekhne mein wazeh hote hain.', examples: ['VS Code', 'Sublime Text', 'Notepad++', 'Atom', 'Brackets', 'IntelliJ IDEA', 'WebStorm', 'PyCharm', 'Kate', 'Gedit', 'TextMate'] },
          { icon: '🌐', style: 'browser-card', title: 'Browser-based editors', definition: 'Web browser mein chalte hain. Install karne ki zaroorat nahi hoti.', examples: ['CodePen', 'JSFiddle', 'StackBlitz', 'Replit', 'Glitch', 'CodeSandbox'] },
          { icon: '☁', style: 'cloud-card', title: 'Cloud-based editors', definition: 'Cloud par online development environment aur version control ke saath kaam karte hain.', examples: ['GitHub Codespaces', 'Replit', 'Gitpod', 'AWS Cloud9', 'Azure DevOps', 'Codeanywhere'] },
          { icon: '✦', style: 'ai-card', title: 'AI-powered editors', definition: 'Code mukammal karne, samjhane aur chat assistant jaisi AI sahuliyat dete hain.', examples: ['Cursor', 'GitHub Copilot', 'Windsurf', 'Zed', 'Continue', 'Aider'] },
          { icon: '⌨', style: 'modal-card', title: 'Modal editors', definition: 'Kaam ke liye mukhtalif modes istemaal karte hain, jaise insert aur normal. Is se editing tez aur moassar hoti hai.', examples: ['Vim', 'Neovim', 'Helix'] },
          { icon: '✎', style: 'lightweight-card', title: 'Lightweight text editors', definition: 'Seedhe, tez aur simple hote hain. Extra features ke baghair sirf text edit karte hain.', examples: ['Notepad', 'Micro', 'Kate', 'TextEdit', 'Featherpad', 'Geany'] },
          { icon: '🛠', style: 'ide-card', title: 'Full IDEs', definition: 'Mukammal development tools hote hain jin mein debugging, testing aur doosri sahuliyat shamil hoti hain.', examples: ['Visual Studio', 'IntelliJ IDEA', 'Android Studio', 'Eclipse', 'NetBeans', 'Xcode'] },
        ],
        overlaps: [
          { name: 'Neovim', types: 'Terminal-based · Modal' },
          { name: 'VS Code', types: 'GUI-based · Full IDE · Extensions ke zariye AI-powered' },
          { name: 'Cursor', types: 'GUI-based · AI-powered' },
          { name: 'Replit', types: 'Browser-based · Cloud-based' },
        ],
      },
      {
        title: 'App, Website & Web App',
        heading: 'App, Website aur Web App ka farq',
        definition: 'Naam milte julte hain, lekin in teenon ke maqsad aur istemaal mukhtalif hain.',
        concept: 'DIGITAL PRODUCTS KI QISMEIN',
        appTypes: [
          {
            icon: '▯', style: 'app-card', title: 'App', subtitle: 'Mobile / Desktop App',
            definition: 'Aisa software jo aam tor par mobile ya computer par install hota hai.',
            examples: 'WhatsApp, Instagram, Calculator, Spotify',
            technologies: 'Android (Kotlin), iOS (Swift), React Native, Flutter',
          },
          {
            icon: '🌐', style: 'website-card', title: 'Website', subtitle: 'Static / Informational',
            definition: 'Aise web pages jo browser mein maloomat ya content dikhate hain.',
            examples: 'Wikipedia, company website, blog, portfolio',
            technologies: 'HTML, CSS, JavaScript, WordPress, Next.js',
          },
          {
            icon: '▣', style: 'webapp-card', title: 'Web App', subtitle: 'Interactive Application',
            definition: 'Browser mein chalne wala interactive software. Is mein user kaam karta hai, data manage karta hai, ya transactions karta hai.',
            examples: 'Google Docs, Trello, online banking, CRM, dashboard apps',
            technologies: 'React, Next.js, Node.js, APIs, database, authentication',
          },
        ],
        comparison: [
          { feature: 'Install karna', app: 'Aam tor par haan', website: 'Nahi', webApp: 'Nahi, browser mein chalti hai' },
          { feature: 'Browser mein chalti hai', app: 'Zaroori nahi', website: 'Haan', webApp: 'Haan' },
          { feature: 'Asal maqsad', app: 'Device par software chalana', website: 'Maloomat dikhana', webApp: 'User se kaam karwana' },
          { feature: 'Login / Dashboard', app: 'Ho sakta hai', website: 'Ho sakta hai', webApp: 'Aksar hota hai' },
          { feature: 'Database', app: 'Ho sakta hai', website: 'Ho sakta hai', webApp: 'Aksar hota hai' },
        ],
        shortcuts: [
          { title: 'App', text: 'Install karke use karein.' },
          { title: 'Website', text: 'Maloomat dekhein.' },
          { title: 'Web App', text: 'Browser mein kaam karein.' },
        ],
        projectExample: [
          { title: 'HOF Pack Website', text: 'Home, About, Products, Industries aur Blog se visitors company aur products ke baare mein jaan sakte hain.' },
          { title: 'HOF Pack Web App / Admin', text: 'Admin login karke products, pages, images aur content manage karta hai. Leads aur forms bhi process kiye ja sakte hain.' },
          { title: 'HOF Pack Mobile App (mustaqbil)', text: 'Agar business ko mobile app ki zaroorat ho, to Android ya iOS app banayi ja sakti hai.' },
        ],
      },
      {
        title: 'npm, npx, pnpm, bun, yarn',
        heading: 'JavaScript package tools ka farq',
        definition: 'Yeh tools JavaScript packages install aur manage karte hain. Kuch tools bina install kiye packages chalate hain, aur kuch development ke mazeed kaam bhi karte hain.',
        concept: 'JAVASCRIPT PACKAGE TOOLS',
        packageManagers: [
          {
            icon: 'npm', style: 'npm-manager', title: 'npm', fullName: 'Node Package Manager',
            definition: 'Node.js ka default package manager. Packages install, manage aur share karne ke kaam aata hai.',
            tasks: ['Packages install karna', 'Dependencies manage karna', 'Scripts chalana', 'Packages publish karna'],
            use: 'Project ki dependencies install aur manage karne ke liye.', command: 'npm install express',
          },
          {
            icon: 'npx', style: 'npx-manager', title: 'npx', fullName: 'Node Package eXecute',
            definition: 'Package ko install kiye baghair seedha chalata hai. Zaroorat par package temporary download karta hai.',
            tasks: ['Package temporary download karke chalana', 'CLI tools asaani se use karna'],
            use: 'CLI tools ko install kiye baghair ek baar chalane ke liye.', command: 'npx create-vite@latest',
          },
          {
            icon: '▦', style: 'pnpm-manager', title: 'pnpm', fullName: 'Performant npm',
            definition: 'Tez aur disk space bachane wala package manager. Packages ke liye hard links aur symlinks use karta hai.',
            tasks: ['Fast install', 'Disk space bachana', 'Strict node_modules structure rakhna'],
            use: 'Barray projects mein packages tezi aur efficiency se manage karne ke liye.', command: 'pnpm install',
          },
          {
            icon: '⚡', style: 'bun-manager', title: 'bun', fullName: 'All-in-one JavaScript Runtime',
            definition: 'Tez all-in-one tool: JavaScript runtime, package manager, bundler aur test runner.',
            tasks: ['Packages install karna', 'Scripts tez chalana', 'Bundling aur testing karna', 'JavaScript runtime dena'],
            use: 'Jab aik hi tez tool se mukhtalif JavaScript kaam karne hon.', command: 'bun install',
          },
          {
            icon: '🧶', style: 'yarn-manager', title: 'yarn', fullName: 'Yet Another Resource Negotiator',
            definition: 'npm ka aik alternative, jo reliable aur tez dependency management deta hai.',
            tasks: ['Packages install karna', 'Dependencies lock karna', 'Offline cache support', 'Workspaces support'],
            use: 'Reliable installs aur offline ya consistent dependency management ke liye.', command: 'yarn install',
          },
        ],
        packageComparison: [
          { name: 'npm', summary: 'Default aur popular; install aur manage' },
          { name: 'npx', summary: 'Install kiye baghair run' },
          { name: 'pnpm', summary: 'Tez aur efficient; disk space bachaye' },
          { name: 'bun', summary: 'Bohat tez; all-in-one' },
          { name: 'yarn', summary: 'Reliable aur consistent' },
        ],
        packageInstallGuide: {
          local: 'Local install project ki dependencies ke liye hoti hai. Package files project root ke `node_modules/` mein milti hain aur dependency `package.json`/lockfile mein record hoti hai.',
          global: 'Global install aam tor par command-line tool ko mukhtalif folders se chalane ke liye hoti hai. Yeh current project ki dependency nahi banti.',
          localCommand: 'npm install lodash',
          globalCommand: 'npm install --global typescript',
          checkCommand: 'npm root  ·  npm root --global',
        },
      },
      {
        title: 'Row-Level Security (RLS)',
        heading: 'Database har user ko uski ijazat wali rows dikhata hai',
        definition: 'RLS database ko row-by-row faisla karne deta hai: user kaunsi rows dekh sakta, add, edit ya delete kar sakta hai.',
        concept: 'DATABASE-LEVEL SECURITY',
        rlsGuide: true,
        flow: [
          { title: 'User request', text: 'User data mangta ya badalta hai.' },
          { title: 'RLS policy', text: 'Database policy check karta hai.' },
          { title: 'Matching rows', text: 'Sirf allowed rows select hoti hain.' },
          { title: 'Access decision', text: 'Request allow ya deny hoti hai.' },
        ],
        operations: [
          { name: 'SELECT', action: 'Rows read karna', clause: 'USING', icon: '◉' },
          { name: 'INSERT', action: 'Nayi row add karna', clause: 'WITH CHECK', icon: '+' },
          { name: 'UPDATE', action: 'Maujooda row edit karna', clause: 'USING + WITH CHECK', icon: '✎' },
          { name: 'DELETE', action: 'Row delete karna', clause: 'USING', icon: '▤' },
          { name: 'ALL', action: 'Sab operations par rule', clause: 'USING + WITH CHECK', icon: '✳' },
        ],
        behaviors: [
          { name: 'PERMISSIVE', logic: 'OR logic', detail: 'Kai permissive policies mein se aik bhi pass ho jaye, to access mil sakta hai.', result: 'Koi aik pass = allow', style: 'permissive' },
          { name: 'RESTRICTIVE', logic: 'AND logic', detail: 'Restrictive policies sab pass honi chahiye, tabhi access milta hai.', result: 'Sab pass = allow', style: 'restrictive' },
        ],
        roles: [
          { name: 'anon', detail: 'Login nahi kiye hue users' },
          { name: 'authenticated', detail: 'Login kiye hue users' },
          { name: 'service_role', detail: 'Backend / admin role; RLS bypass kar sakta hai' },
          { name: 'Custom roles', detail: 'Apne roles, jaise employee, brewer, admin' },
        ],
        policyExample: 'CREATE POLICY "select_own_data" ON orders\nFOR SELECT\nTO authenticated\nUSING (auth.uid() = user_id);',
        patterns: [
          { name: 'Owner-only', detail: 'User sirf apna data dekhe ya badle.', code: 'CREATE POLICY "own_data"\nON orders FOR ALL\nUSING (auth.uid() = user_id)\nWITH CHECK (auth.uid() = user_id);', color: 'owner' },
          { name: 'Public read', detail: 'Sab log dekh sakte hain; edit nahi kar sakte.', code: 'CREATE POLICY "public_read"\nON products FOR SELECT\nUSING (true);', color: 'public' },
          { name: 'Role-based', detail: 'Admin ko extra access milta hai.', code: 'CREATE POLICY "admin_all"\nON orders FOR ALL\nUSING ((SELECT role FROM profiles\nWHERE id = auth.uid()) = \'admin\');', color: 'role' },
          { name: 'Team access', detail: 'Team members aik doosre ka team data dekhein.', code: 'CREATE POLICY "team_access"\nON orders FOR SELECT\nUSING (team_id = (SELECT team_id\nFROM profiles WHERE id = auth.uid()));', color: 'team' },
          { name: 'Time / status-based', detail: 'Sirf pending orders dikhayein.', code: 'CREATE POLICY "pending_only"\nON orders FOR SELECT\nUSING (status = \'pending\');', color: 'time' },
        ],
        summary: [
          { name: 'SELECT', detail: 'Read access', clause: 'USING' },
          { name: 'INSERT', detail: 'Nayi row', clause: 'WITH CHECK' },
          { name: 'UPDATE', detail: 'Edit row', clause: 'USING + WITH CHECK' },
          { name: 'DELETE', detail: 'Delete row', clause: 'USING' },
          { name: 'ALL', detail: 'Sab operations', clause: 'Dono clauses' },
        ],
        commands: [
          'ALTER TABLE orders ENABLE ROW LEVEL SECURITY;',
          'ALTER TABLE orders FORCE ROW LEVEL SECURITY;',
          "SELECT * FROM pg_policies WHERE tablename = 'orders';",
          'ALTER TABLE orders DISABLE ROW LEVEL SECURITY;',
        ],
        tips: [
          'Har table par RLS enable karein.',
          'Har operation ke liye munasib policy likhein.',
          'Mukhtalif roles ke saath test karein.',
          'service_role ko sirf trusted backend mein use karein.',
          'Policies ko real user scenarios mein test karein.',
        ],
        dbmsConcepts: [
          { name: 'DAC', fullName: 'Discretionary Access Control', detail: 'Owner decide karta hai ke kisay access mile.' },
          { name: 'MAC', fullName: 'Mandatory Access Control', detail: 'System-wide fixed rules access control karte hain.' },
          { name: 'RBAC', fullName: 'Role-Based Access Control', detail: 'Roles ke zariye permissions assign hoti hain.' },
        ],
      },
      {
        title: 'Authentication & Sessions',
        heading: 'Login, identity aur session kaise kaam karte hain',
        definition: 'Authentication tasdeeq karta hai ke user kaun hai. Session login ki halat yaad rakhta hai, aur middleware ya proxy protected routes par request check karta hai.',
        concept: 'AUTH, SESSION & ROUTE SECURITY',
        authGuide: true,
        coreConcepts: [
          { title: 'OAuth', icon: '◎', detail: 'Google jaisay provider se sign-in karne ka standard protocol.' },
          { title: 'Client ID', icon: 'ID', detail: 'OAuth app ki public pehchan. Provider ko batata hai ke login request kis app se aayi.' },
          { title: 'Client Secret', icon: '▣', detail: 'OAuth app ka private credential. Isay server/provider settings mein rakho; browser ya public repo mein nahi.' },
          { title: 'Redirect URI', icon: '↗', detail: 'Login mukammal hone par user jis callback URL par wapas aata hai.' },
          { title: 'Site URL', icon: '🌐', detail: 'Supabase ka default fallback URL. Code mein redirectTo na diya ho to isay use kiya ja sakta hai.' },
          { title: 'Provider', icon: '◉', detail: 'Login identity verify karne wala service, jaise Google, GitHub ya Facebook.' },
        ],
        sessionConcepts: [
          { title: 'Session', detail: 'Login ke baad user ki authenticated halat; app isay aglay requests mein pehchanti hai.', icon: '✓' },
          { title: 'Cookie', detail: 'Browser mein session tokens rakhti aur configured requests ke saath server ko bhejti hai.', icon: '🍪' },
          { title: 'JWT', detail: 'Signed token jisme identity aur claims hotay hain. Server par verify karna zaroori hai.', icon: '✓' },
          { title: 'Middleware / Proxy', detail: 'Request ke route tak pohanchne se pehle chal kar session check ya refresh karta hai.', icon: '⚙' },
          { title: '.env variables', detail: 'Server secrets, jaise OAuth Client Secret, environment settings mein rakho. Browser ko secret expose na karo.', icon: '{ }' },
        ],
        authFlow: [
          { title: 'Sign in', detail: 'User Google se login choose karta hai.' },
          { title: 'Provider', detail: 'OAuth provider user ki identity verify karta hai.' },
          { title: 'Callback', detail: 'Provider authorization code app ke callback URL par bhejta hai.' },
          { title: 'Session', detail: 'Callback par exchangeCodeForSession authorization code ko session mein badalta hai.' },
          { title: 'Request', detail: 'Session cookie aglay browser requests ke saath jati hai.' },
        ],
        clientTypes: [
          { title: 'createBrowserClient', side: 'Frontend', details: ['Browser mein chalta hai', 'Client-side auth aur sign-in manage karta hai', 'Cookie session ko app ke saath sync rakhta hai'], icon: '▣' },
          { title: 'createServerClient', side: 'Backend', details: ['Server Components aur route handlers mein chalta hai', 'Request/response cookies parh aur update karta hai', 'Server-side session access deta hai'], icon: '▤' },
        ],
        proxyCode: "// Next.js 16+: proxy.ts\nimport { type NextRequest } from 'next/server'\nimport { updateSession } from '@/lib/supabase/proxy'\n\nexport async function proxy(request: NextRequest) {\n  return await updateSession(request)\n}\n\nexport const config = {\n  matcher: ['/dashboard/:path*', '/admin/:path*'],\n}",
        middlewareNote: 'Next.js 16 mein middleware ka naam proxy ho gaya hai. Next.js 15 aur puranay versions mein middleware.ts aur middleware() istemaal hotay hain.',
        useCases: [
          { name: 'Dashboard protect karna', example: 'Sirf logged-in users /dashboard khol saken.' },
          { name: 'Admin routes', example: 'Sirf admin role wala user /admin tak pohanchay.' },
          { name: 'Login ke baad redirect', example: 'Logged-in user ko login page ke bajaye dashboard par bhejein.' },
          { name: 'Role-based access', example: 'Session ya verified claims se role check karke allow ya deny karein.' },
        ],
        securityNotes: [
          'Client Secret ko browser code mein kabhi na bhejein.',
          'Proxy/middleware mein sirf zaroori route checks karein; heavy database kaam yahan na chalayein.',
          'Server-side authorization ke liye token verify karein; cookie se nikla session akela trusted nahi hota.',
          'Supabase SSR mein proxy refreshed auth cookies ko request aur response ke darmiyan sync karta hai.',
          'Production mein exact redirect URL allow-list karein; broad wildcard ko sirf zaroorat aur sahi environment tak mehdood rakhein.',
        ],
        supabaseTerms: [
          { title: 'Supabase', icon: 'ϟ', color: 'green', detail: 'Backend platform jisme database, Auth aur doosri app services milti hain.' },
          { title: 'SSR', icon: '▤', color: 'blue', detail: 'Server-Side Rendering: server page ka HTML browser ko bhejne se pehle tayyar karta hai.' },
          { title: 'Code exchange', icon: '↻', color: 'purple', detail: 'OAuth callback ka code exchangeCodeForSession() se user session mein tabdeel hota hai.' },
          { title: 'RLS', icon: '▦', color: 'orange', detail: 'Row Level Security database policy hai jo decide karti hai ke user kaunsi rows access kar sakta hai.' },
          { title: 'Database trigger', icon: '⚡', color: 'orange', detail: 'Database event par automatic function chal sakta hai; misal ke taur par signup ke baad profile row banana.' },
          { title: 'Auth Helpers → SSR', icon: '⇢', color: 'red', detail: '@supabase/auth-helpers-nextjs deprecated hai. Naye setup aur migration ke liye @supabase/ssr use karein; dono packages ko aik saath mix na karein.' },
          { title: 'Redirect wildcard', icon: '／', color: 'purple', detail: '/** jaisa pattern nested paths match kar sakta hai. Production mein exact redirect paths ko tarjeeh dein.' },
          { title: 'Build error', icon: '!', color: 'red', detail: 'Purana helper import remove ho ya package mismatch ho to compile fail ho sakta hai. Package aur imports ko saath update karein.' },
        ],
        authSources: [
          { label: 'Redirect URL setup', url: 'https://supabase.com/docs/guides/auth/redirect-urls' },
          { label: 'Auth Helpers se SSR migration', url: 'https://supabase.com/docs/guides/auth/server-side/migrating-to-ssr-from-auth-helpers' },
          { label: 'SSR clients banana', url: 'https://supabase.com/docs/guides/auth/server-side/creating-a-client' },
        ],
        summary: [
          { title: 'Login', detail: 'OAuth se user ki identity verify hoti hai.' },
          { title: 'Session', detail: 'Cookie browser mein login state yaad rakhti hai.' },
          { title: 'Proxy', detail: 'Protected route par request check hoti hai.' },
          { title: 'Decision', detail: 'Session valid ho to allow, warna login par redirect.' },
        ],
      },
      {
        title: 'React Hooks',
        heading: 'React Hooks ko asaan alfaaz mein samjhein',
        definition: 'Hooks function components mein state aur React ki doosri features use karne dete hain. Neeche common hooks, unka kaam aur chhoti code misaalein hain.',
        concept: 'REACT HOOKS GUIDE',
        hooksGuide: true,
        hooks: [
          { name: 'useState', group: 'State', icon: '▰', detail: 'Component mein state rakhne aur update par re-render karne ke liye.', code: 'const [count, setCount] = useState(0);', color: 'blue' },
          { name: 'useEffect', group: 'Effects', icon: '⟳', detail: 'Component ko API, subscription ya browser jaisay external system ke saath sync karta hai.', code: 'useEffect(() => connect(), [roomId]);', color: 'green' },
          { name: 'useContext', group: 'Context', icon: '●●', detail: 'Door ke parent se context value leta hai; har level par props pass nahi karne partay.', code: 'const theme = useContext(ThemeContext);', color: 'green' },
          { name: 'useRef', group: 'Refs', icon: '⊙', detail: 'Aisi mutable value ya DOM reference rakhta hai jiska badalna re-render nahi karta.', code: 'const inputRef = useRef(null);', color: 'blue' },
          { name: 'useReducer', group: 'State', icon: '⑂', detail: 'Complex state ko reducer function aur actions ke zariye manage karta hai.', code: 'const [state, dispatch] = useReducer(reducer, initialState);', color: 'blue' },
          { name: 'useMemo', group: 'Performance', icon: '▣', detail: 'Calculation ka result cache karta hai; dependencies badlein to dobara calculate hota hai.', code: 'const total = useMemo(() => sum(items), [items]);', color: 'purple' },
          { name: 'useCallback', group: 'Performance', icon: '🔗', detail: 'Function reference cache karta hai taa-ke zaroorat ke baghair naya function na bane.', code: 'const save = useCallback(() => send(id), [id]);', color: 'purple' },
          { name: 'useLayoutEffect', group: 'Effects', icon: '▱', detail: 'Browser paint se pehle chalta hai; layout measure ya synchronously adjust karne mein kaam aata hai.', code: 'useLayoutEffect(() => measure(), []);', color: 'green' },
          { name: 'useImperativeHandle', group: 'Refs', icon: '🔧', detail: 'Parent component ko ref ke zariye kaun se methods milenge, yeh control karta hai.', code: 'useImperativeHandle(ref, () => ({ focus }));', color: 'orange' },
          { name: 'useDebugValue', group: 'Advanced', icon: '⌕', detail: 'Custom Hook ka label React DevTools mein dikhata hai.', code: 'useDebugValue(status);', color: 'orange' },
          { name: 'useTransition', group: 'Performance', icon: '⌛', detail: 'Kuch state updates ko non-blocking mark karta hai taa-ke UI responsive rahe.', code: 'const [pending, startTransition] = useTransition();', color: 'blue' },
          { name: 'useDeferredValue', group: 'Performance', icon: '◷', detail: 'Non-urgent value update ko delay karta hai taa-ke zaroori UI pehle update ho.', code: 'const deferred = useDeferredValue(query);', color: 'blue' },
          { name: 'useId', group: 'Accessibility', icon: 'ID', detail: 'Accessibility attributes ke liye stable unique ID banata hai.', code: 'const id = useId();', color: 'blue' },
          { name: 'useSyncExternalStore', group: 'Advanced', icon: '▤', detail: 'React component ko external store ki updates ke saath subscribe aur sync karta hai.', code: 'useSyncExternalStore(subscribe, getSnapshot);', color: 'blue' },
          { name: 'useInsertionEffect', group: 'Effects', icon: '✎', detail: 'DOM changes se pehle chalta hai; zyada tar CSS-in-JS library authors ke kaam aata hai.', code: 'useInsertionEffect(() => addStyles(), [css]);', color: 'purple' },
          { name: 'use', group: 'React 19+', icon: '⇩', detail: 'Render ke dauran Promise ya context ki value read karta hai.', code: 'const data = use(dataPromise);', color: 'orange' },
          { name: 'useOptimistic', group: 'Actions', icon: '🚀', detail: 'Server response ka intezar karte hue UI ko foran temporary updated state dikhata hai.', code: 'const [value, setValue] = useOptimistic(realValue);', color: 'orange' },
          { name: 'useActionState', group: 'Actions', icon: '⚡', detail: 'Action ka result aur pending state manage karta hai; form submissions mein bhi kaam aata hai.', code: 'const [state, action, pending] = useActionState(fn, initial);', color: 'orange' },
          { name: 'useFormState', group: 'Legacy name', icon: '▣', detail: 'Purana naam; React 19 mein is API ka current naam useActionState hai.', code: '// Naye code mein useActionState use karein', color: 'orange' },
          { name: 'useFormStatus', group: 'React DOM', icon: '✓', detail: 'Parent form ki pending submission state deta hai. Isay form ke andar rendered component mein call karein.', code: 'const { pending } = useFormStatus();', color: 'green' },
          { name: 'useNavigation', group: 'React Router', icon: '⌖', detail: 'React Router navigation ki state batata hai, jaise navigation pending hai ya idle.', code: 'const navigation = useNavigation();', color: 'blue' },
          { name: 'Custom Hook', group: 'Apna Hook', icon: '✿', detail: 'Apni reusable logic ko `use` se shuru hone wale function mein jama karein.', code: 'function useCounter() { /* reusable logic */ }', color: 'pink' },
          { name: 'useEffectEvent', group: 'Effects', icon: '↗', detail: 'Effect ke andar aisa event handler banata hai jo latest props/state parhta hai, magar Effect ko dobara nahi chalata.', code: 'const onVisit = useEffectEvent(() => log(url));', color: 'purple' },
        ],
        customFlow: [
          { title: 'Logic nikalein', detail: 'Repeat hone wali logic pehchanein.' },
          { title: 'Doosray Hooks use karein', detail: 'State ya Effect ko custom Hook mein rakhein.' },
          { title: 'Reuse karein', detail: 'Hook ko kai components mein call karein.' },
        ],
        customExample: 'function useCounter(initial = 0) {\n  const [count, setCount] = useState(initial);\n  const increment = () => setCount(value => value + 1);\n  return { count, increment };\n}\n\nconst { count, increment } = useCounter();',
        notes: [
          'Aksar Hooks ko function component ya custom Hook ke top level par call karein; React ka `use` Hook special hai aur condition ke andar bhi use ho sakta hai.',
          'useFormState purana naam hai; React 19 ke naye code mein useActionState use karein.',
          'useFormStatus react-dom se aata hai; useNavigation React Router ka Hook hai, React ka built-in Hook nahi.',
          'useMemo aur useCallback ko sirf zaroorat par use karein; har jagah optimization ke liye nahi.',
        ],
      },
      {
        title: 'GTM, GA4 & Google Ads',
        heading: 'Website action se report tak tracking ka safar',
        definition: 'GTM website events ko collect karke tags ke zariye GA4 aur Google Ads tak bhejta hai. Is se aap user activity aur ad conversions ko samajh sakte hain.',
        concept: 'GOOGLE TRACKING FLOW',
        gtmGuide: true,
        tools: [
          { icon: '◧', name: 'Google Tag Manager', short: 'GTM', description: 'Website tags, triggers aur variables ko aik jagah manage karta hai.', color: 'gtm' },
          { icon: '▥', name: 'Google Analytics 4', short: 'GA4', description: 'Website ya app par user actions ko events ki shakal mein measure karta hai.', color: 'ga4' },
          { icon: '↗', name: 'Google Ads', short: 'Ads', description: 'Ad campaigns ke liye conversions aur performance measure karta hai.', color: 'ads' },
        ],
        events: ['page_view', 'cta_click', 'form_submit', 'purchase', 'scroll'],
        components: [
          { name: 'Tags', detail: 'Data kis platform ko bhejna hai; jaise GA4 event ya Ads conversion tag.', icon: '◆' },
          { name: 'Triggers', detail: 'Tag kab fire hoga; jaise button click ya form submit par.', icon: '◉' },
          { name: 'Variables', detail: 'Tag ko kaunsi value deni hai; jaise button text ya page path.', icon: '{x}' },
          { name: 'Data Layer', detail: 'Website se structured event aur parameter data GTM tak lata hai.', icon: '▤' },
        ],
        trackingFlow: [
          { title: 'User action', detail: 'User CTA button click karta hai.', icon: '●' },
          { title: 'dataLayer.push', detail: 'Event name aur button details push hoti hain.', icon: '▤' },
          { title: 'GTM trigger', detail: 'Custom Event trigger event name match karta hai.', icon: '◉' },
          { title: 'GTM tags', detail: 'GA4 event tag aur/ya Ads conversion tag fire hotay hain.', icon: '◆' },
          { title: 'Reports', detail: 'GA4 aur Google Ads mein event/conversion report hoti hai.', icon: '▥' },
        ],
        dataLayerExample: "window.dataLayer = window.dataLayer || [];\n\nwindow.dataLayer.push({\n  event: 'cta_click',\n  button_text: 'Get Started',\n  button_location: 'hero_section'\n});",
        setupSteps: [
          { title: 'GTM container banayein', detail: 'Website par sahi container snippet install karein.' },
          { title: 'GA4 tag configure karein', detail: 'Measurement ID (G-...) ko GTM mein set karein.' },
          { title: 'Events aur triggers banayein', detail: 'Decide karein kaunsa user action track karna hai.' },
          { title: 'Ads conversion set karein', detail: 'Conversion ID (AW-...), label aur Conversion Linker ko sahi setup karein.' },
          { title: 'Test aur publish karein', detail: 'Preview mode aur Tag Assistant se verify karke container publish karein.' },
        ],
        reports: [
          { name: 'GA4', items: ['Realtime', 'Events', 'Key events (pehle conversions)', 'Audiences aur engagement'] },
          { name: 'Google Ads', items: ['Conversions', 'Conversion rate', 'Cost per conversion', 'Campaign performance', 'ROAS'] },
        ],
        bestPractices: [
          'Event names aur parameters ko ek jaisa aur saaf rakhein.',
          'dataLayer ko dobara khaali array se overwrite na karein; naye events ke liye push() use karein.',
          'GTM Preview, Tag Assistant aur GA4 DebugView/Realtime mein events verify karein.',
          'Custom GA4 parameters ko reports mein dekhne ke liye custom dimensions register karni par sakti hain.',
          'Aik conversion ko GA4 aur Ads dono tags se bhejte waqt duplicate counting se bachne ke liye setup check karein.',
          'Consent settings aur privacy requirements ko apni audience aur ilaqay ke mutabiq configure karein.',
        ],
        benefits: [
          'Tags aik central jagah se manage hote hain.',
          'Aam tag changes ke liye har dafa website code edit nahi karna parta; dataLayer setup ke liye developer kaam darkar ho sakta hai.',
          'GA4 mein user behavior samajhne mein madad milti hai.',
          'Google Ads conversions aur campaign results measure hote hain.',
        ],
      },
      {
        title: 'Database Security & Access Control',
        heading: 'Sahi user ko sahi data tak sahi access dein',
        definition: 'Database security pehle user ki identity verify karti hai, phir decide karti hai ke woh kaunsa data dekh ya badal sakta hai.',
        concept: 'AUTHENTICATION → AUTHORIZATION',
        dbSecurityGuide: true,
        accessFlow: [
          { title: 'Authentication', question: 'User kaun hai?', detail: 'Login ya identity verify karein.', icon: '●', color: 'identity' },
          { title: 'Authorization', question: 'User kya kar sakta hai?', detail: 'Role aur permissions check karein.', icon: '✓', color: 'permission' },
          { title: 'Security level', question: 'Kitna data?', detail: 'Table, row, column ya view tak access dein.', icon: '≋', color: 'granularity' },
          { title: 'Safe result', question: 'Sirf allowed data', detail: 'Baqi data ko protect rakhein.', icon: '⬟', color: 'safe' },
        ],
        securityLevels: [
          { name: 'Table-level', detail: 'GRANT/REVOKE se poori table par access dein ya hataein.', example: 'GRANT SELECT ON orders TO order_viewer;', icon: '▦', color: 'table' },
          { name: 'Row-level (RLS)', detail: 'Policy har row ke liye decide karti hai ke user usay dekh ya badal sakta hai.', example: 'CREATE POLICY own_rows ON orders\nUSING (owner_name = current_user);', icon: '▤', color: 'row' },
          { name: 'Column-level', detail: 'Sensitive columns, jaise salary, ko sirf authorized role tak mehdood karein.', example: 'REVOKE SELECT ON employees FROM PUBLIC;\nGRANT SELECT (name, department)\nON employees TO staff_role;\nGRANT SELECT (salary)\nON employees TO hr_role;', icon: '▥', color: 'column' },
          { name: 'Cell-level', detail: 'Har individual cell par alag rule PostgreSQL ka direct built-in feature nahi. Views, column grants aur RLS mila kar design karein.', example: 'Sensitive fields ko view mein omit karein\njaise public_employee_view.', icon: '▣', color: 'cell' },
          { name: 'View-based', detail: 'View mein sirf required columns ya filtered records expose karein.', example: 'CREATE VIEW public_employee_view AS\nSELECT id, name, department\nFROM employees;', icon: '◫', color: 'view' },
        ],
        accessModels: [
          { name: 'RBAC', fullName: 'Role-Based Access Control', detail: 'Permissions roles ko dein; users ko role assign karein.', example: 'Roles: admin, HR, employee, viewer', icon: '♟', color: 'rbac' },
          { name: 'ABAC', fullName: 'Attribute-Based Access Control', detail: 'Role ke saath department, location, time ya clearance jaise attributes par faisla karein.', example: "Misal: department = 'HR'", icon: '⚙', color: 'abac' },
        ],
        functionSecurity: [
          { name: 'SECURITY INVOKER', label: 'Default', detail: 'Function caller ki permissions se chalta hai; caller ke access rules apply hotay hain.', icon: '●', color: 'invoker' },
          { name: 'SECURITY DEFINER', label: 'Owner rights', detail: 'Function owner ki permissions se chalta hai. Owner agar RLS bypass karta ho to function bhi protected rows tak pohanch sakta hai.', icon: '♛', color: 'definer' },
        ],
        functionSafeguards: [
          'SECURITY DEFINER sirf zaroorat par use karein; yeh caller se zyada privilege chala sakta hai.',
          'Fixed safe search_path set karein; untrusted schemas ko search path mein na rakhein aur pg_temp ko aakhir mein rakhein.',
          'Function ka default PUBLIC EXECUTE access revoke karke sirf zaroori roles ko grant karein.',
        ],
        indexGuide: [
          { name: 'B-tree', goodFor: 'Aam tor par equality, range aur sorting queries.', icon: '⌕' },
          { name: 'GIN', goodFor: 'JSONB, arrays aur multi-value search cases.', icon: '{…}' },
          { name: 'Unique', goodFor: 'Duplicate values rokne aur data integrity ke liye.', icon: '🔒' },
        ],
        managementSteps: [
          { name: 'Migration file', detail: 'Har schema change ko SQL migration mein likhein.' },
          { name: 'Version control', detail: 'Migration ko code ke saath review aur track karein.' },
          { name: 'Apply & verify', detail: 'Database update karke expected schema check karein.' },
        ],
        secretNotes: [
          'Connection string aur password environment variables mein rakhein.',
          'Secrets ko source code, browser bundle ya public repository mein commit na karein.',
          'RLS policies ko app role ke saath test karein; database owner ke session se test karne par RLS aam tor par apply nahi hoti.',
        ],
      },
      {
        title: '.env Files',
        heading: '.env files mein kaunsa data kahan rakhein?',
        definition: 'Environment variables app ki settings aur secrets ko source code se alag rakhti hain. Har framework files ko thora mukhtalif load kar sakta hai; yahan misaal Next.js ki hai.',
        concept: 'ENVIRONMENT VARIABLES',
        envGuide: true,
      },
      {
        title: 'Chatbots & Groq',
        heading: 'Rule-based aur AI chatbot ka farq',
        definition: 'Chatbot user ke sawal ka jawab ya kaam mein madad karta hai. Kuch bots fixed rules follow karte hain; AI chatbot backend ke zariye language model ko request bhej kar jawab bana sakta hai.',
        concept: 'CHATBOT KI BUNIYADI QISMEIN',
        chatbotGuide: true,
        chatbotTypes: [
          { title: 'Rule-based bot', color: 'blue', icon: '⚙', detail: 'Pehle se likhe rules, buttons ya keywords ke mutabiq jawab deta hai. Sirf pehchane hue flows sambhalta hai.', features: ['Jawab predictable hotay hain', 'Simple FAQ ke liye asaan', 'Naye sawal par fallback zaroori'], cases: ['Business hours', 'Order status menu', 'Appointment options'], flow: ['User sawal', 'Rule / keyword match', 'Saved jawab', 'Bot reply'], example: 'User: Aap kab khulay hotay hain?\nBot: Hum subah 9 se shaam 6 tak khulay hain.' },
          { title: 'API-based AI bot', color: 'green', icon: '✦', detail: 'Backend user ka message AI model API ko bhejta hai. Model context samajh kar naya jawab bana sakta hai.', features: ['Natural language samajhta hai', 'Khulay sawalat handle kar sakta hai', 'Backend aur API integration chahiye'], cases: ['Customer support assistant', 'Content sawalat', 'Code ya product helper'], flow: ['User sawal', 'Backend API request', 'AI model inference', 'Jawab wapas bot ko'], example: 'User: Quantum computing asaan alfaaz mein samjhao.\nBot: Qubits aik hi waqt mein mukhtalif halaton ko represent kar sakte hain.' },
        ],
        groqRole: 'Groq API model inference ke liye platform hai. App ka backend request bhejta hai aur generated response wapas leta hai; Groq akela chatbot interface ya tumhara support system nahi.',
        groqFlow: ['User', 'Chat interface', 'Tumhara backend', 'Groq API', 'Jawab backend se', 'Bot reply'],
        securityTip: 'GROQ_API_KEY ko server par rakho. Isay browser code ya NEXT_PUBLIC_ variable mein expose mat karo.',
      },
      {
        title: 'Chatbot Categories & Chatwoot',
        heading: 'Chatbot ki categories aur support platforms',
        definition: 'Aik chatbot ko mukhtalif pehluon se classify kiya ja sakta hai. Chatwoot jaisi shared inbox/helpdesk services customer conversations manage karti hain; yeh khud chatbot ki aik type nahi.',
        concept: 'CATEGORIES · SUPPORT TOOLS',
        chatwootGuide: true,
        categoryGroups: [
          { title: 'Kaise kaam karta hai?', icon: '⚙', color: 'purple', items: ['Rule-based: fixed menu aur rules', 'Keyword: lafz pehchan kar jawab', 'NLU: intent aur entities samajhna', 'LLM-powered: model se jawab banana', 'Hybrid: rules aur AI dono'] },
          { title: 'Kis maqsad ke liye?', icon: '◎', color: 'green', items: ['Customer support / FAQ', 'Sales aur lead generation', 'Marketing aur engagement', 'Transactional: booking ya order', 'Internal team assistant', 'Voice assistant', 'Companion ya social bot'] },
          { title: 'Kahan chalta hai?', icon: '◉', color: 'blue', items: ['Website live-chat widget', 'WhatsApp ya messaging app', 'SMS', 'Voice / IVR', 'Mobile ya web app ke andar'] },
          { title: 'Kaise banaya hai?', icon: '⌘', color: 'orange', items: ['No-code visual builder', 'Code-first framework', 'Managed SaaS platform'] },
        ],
        platformGroups: [
          { title: 'Support / shared inbox', icon: '▤', color: 'blue', items: ['Intercom', 'Zendesk', 'Freshdesk', 'Gorgias', 'Crisp', 'tawk.to', 'eesel AI', 'Conferbot'] },
          { title: 'Open-source options', icon: '⌂', color: 'green', items: ['Chatwoot', 'ChatterMate', 'Papercups'] },
        ],
        chatwootNote: 'Chatwoot ka Community Edition self-host kiya ja sakta hai. Is ka focus shared inbox aur mukhtalif channels se aane wali customer conversations par hai; AI bot ko integrate kiya ja sakta hai.',
        compareNote: 'In platforms ke features, hosting options aur plans waqt ke saath badal sakte hain. Faisla karte waqt current official product details check karein.',
      },
      {
        title: 'Next.js Folder Structure',
        heading: 'Next.js project ki files aur folders ka naqsha',
        definition: 'Next.js App Router mein folders URL paths banate hain, aur khaas files page, layout, loading ya error UI define karti hain. Neeche aam Next.js 13+ structure ki misaal hai.',
        concept: 'APP ROUTER · PROJECT MAP',
        nextStructureGuide: true,
        treeRows: [
          { depth: 0, name: 'my-next-app/', note: 'PROJECT ROOT', type: 'root' },
          { depth: 1, name: '.next/', note: 'build output · auto-generated', type: 'generated' },
          { depth: 1, name: 'node_modules/', note: 'installed dependencies', type: 'dependencies' },
          { depth: 1, name: 'public/', note: 'static assets · root URL se serve', type: 'public' },
          { depth: 1, name: 'src/', note: 'optional source folder', type: 'src' },
          { depth: 2, name: 'app/', note: 'App Router', type: 'app' },
          { depth: 3, name: '(group)/', note: 'route grouping · URL mein naam nahi', type: 'group' },
          { depth: 4, name: 'layout.tsx', note: 'group ke routes ka shared UI', type: 'file' },
          { depth: 4, name: 'page.tsx', note: 'group landing page', type: 'file' },
          { depth: 3, name: 'about/', note: 'route segment: /about', type: 'folder' },
          { depth: 4, name: 'page.tsx', note: 'page route: /about', type: 'file' },
          { depth: 3, name: 'blog/', note: 'route segment: /blog', type: 'folder' },
          { depth: 4, name: '[slug]/page.tsx', note: 'dynamic route: /blog/:slug', type: 'dynamic' },
          { depth: 3, name: 'loading.tsx', note: 'loading UI', type: 'file' },
          { depth: 3, name: 'error.tsx', note: 'route error boundary', type: 'file' },
          { depth: 3, name: 'not-found.tsx', note: 'not-found UI', type: 'file' },
          { depth: 3, name: 'layout.tsx', note: 'root layout', type: 'file' },
          { depth: 3, name: 'page.tsx', note: 'home page: /', type: 'file' },
          { depth: 1, name: 'components/', note: 'reusable UI · optional convention', type: 'folder' },
          { depth: 1, name: 'lib/', note: 'helpers and utilities · optional', type: 'folder' },
          { depth: 1, name: '.env.local', note: 'local variables · secrets private', type: 'secret' },
          { depth: 1, name: 'next.config.js', note: 'Next.js configuration', type: 'config' },
          { depth: 1, name: 'package.json', note: 'scripts and dependencies', type: 'config' },
          { depth: 1, name: 'tsconfig.json', note: 'TypeScript configuration', type: 'config' },
          { depth: 1, name: 'README.md', note: 'project notes', type: 'file' },
        ],
        structureItems: [
          { name: '.next/', icon: '⚙', color: 'purple', detail: 'Next.js build output aur cache. Tool banata hai; isay source code samajh kar edit na karein.' },
          { name: 'node_modules/', icon: '▦', color: 'blue', detail: 'Package manager se install hui libraries. Package files se dobara ban sakti hai.' },
          { name: 'public/', icon: '▧', color: 'orange', detail: 'Static files, jaise images aur fonts. public/images/logo.png ko /images/logo.png se refer karein.' },
          { name: 'src/app/', icon: '▣', color: 'purple', detail: 'App Router pages, nested layouts aur route files yahan rakh sakte hain. src/ optional hai.' },
          { name: 'layout.tsx', icon: '▤', color: 'blue', detail: 'Shared UI wrap karta hai. Root layout mein aam tor par <html> aur <body> hotay hain.' },
          { name: 'page.tsx', icon: '▧', color: 'green', detail: 'Is folder path ko page route banata hai; misaal app/about/page.tsx se /about.' },
          { name: '(group)/', icon: '⑂', color: 'purple', detail: 'Routes ko organize karta hai; parentheses wala group URL path mein shamil nahi hota.' },
          { name: '[slug]/', icon: '↔', color: 'orange', detail: 'Dynamic segment; app/blog/[slug]/page.tsx /blog/hello jaisay paths match karta hai.' },
          { name: 'loading.tsx', icon: '◷', color: 'blue', detail: 'Route segment load hotay waqt loading UI dikhata hai.' },
          { name: 'error.tsx', icon: '!', color: 'red', detail: 'Route segment ke runtime errors ko error boundary UI se handle karta hai.' },
          { name: 'not-found.tsx', icon: '⌕', color: 'red', detail: 'Not-found state ka UI; route se notFound() call karne par dikhaya ja sakta hai.' },
          { name: 'components/ & lib/', icon: '◇', color: 'green', detail: 'Reusable components aur helper functions ke liye aam folders; Next.js in naamon ko lazmi nahi karta.' },
          { name: '.env.local', icon: '▣', color: 'orange', detail: 'Local environment values. Secrets ko Git mein commit na karein; src/ ke andar rakhne ke bajaye project root mein rakhein.' },
          { name: 'Config files', icon: '⌘', color: 'blue', detail: 'next.config.js app options rakhta hai; package.json scripts/dependencies, aur tsconfig.json TypeScript settings.' },
        ],
        routeExamples: [
          { file: 'app/page.tsx', route: '/' },
          { file: 'app/about/page.tsx', route: '/about' },
          { file: 'app/blog/page.tsx', route: '/blog' },
          { file: 'app/blog/[slug]/page.tsx', route: '/blog/hello-world' },
          { file: 'app/(group)/page.tsx', route: '/  (group URL mein nahi)' },
        ],
        structureNotes: [
          'App Router mein root app/layout.tsx required hota hai; yeh HTML document ka shared frame hai.',
          'src/ optional hai. Agar use karein to public/, config files aur .env files project root mein hi rakhein.',
          'Sirf folder banana route nahi banata: UI page ke liye us segment mein page.tsx rakhein.',
          '.next/ aur node_modules/ generated/install folders hain; aam tor par inhein Git mein commit nahi kiya jata.',
        ],
        structureSources: [
          { label: 'Project structure', url: 'https://nextjs.org/docs/app/getting-started/project-structure' },
          { label: 'Layouts and pages', url: 'https://nextjs.org/docs/app/getting-started/layouts-and-pages' },
          { label: 'src folder', url: 'https://nextjs.org/docs/app/api-reference/file-conventions/src-folder' },
        ],
      },
      {
        title: 'Complete Request Flow',
        heading: 'Browser se server aur wapas tak request ka safar',
        definition: 'Web request aik layered safar hai: browser URL ko request mein badalta hai, server kaam karta hai, phir response wapas aakar browser mein page banata hai. Har app mein proxy, middleware ya database ka setup thora mukhtalif ho sakta hai.',
        concept: 'CLIENT → SERVER → CLIENT',
        requestFlowGuide: true,
        phases: [
          { name: 'Browser request', steps: '01—06', color: 'blue' },
          { name: 'App server', steps: '07—10', color: 'purple' },
          { name: 'Database', steps: '11—12', color: 'green' },
          { name: 'Response return', steps: '13—17', color: 'orange' },
          { name: 'Browser render', steps: '18—19', color: 'pink' },
        ],
        requestSteps: [
          { title: 'User action', detail: 'User link kholta, URL type karta ya form submit karta hai.', group: 'request', icon: '●' },
          { title: 'DNS lookup', detail: 'Domain ka IP dhoonda jata hai; browser ya OS cache se jawab bhi mil sakta hai.', group: 'request', icon: '◎' },
          { title: 'Connection', detail: 'Browser server tak network connection banata hai. HTTPS par aam tor par port 443 hota hai.', group: 'request', icon: '⇄' },
          { title: 'TLS handshake', detail: 'HTTPS mein certificate verify hota aur encrypted connection tayyar hota hai.', group: 'request', icon: '▣' },
          { title: 'HTTP request', detail: 'Method, path, headers, cookies aur zaroorat par body bheji jati hai.', group: 'request', icon: '↑' },
          { title: 'Proxy / load balancer', detail: 'Agar configured ho to request ko sahi app server ya instance tak forward karta hai.', group: 'request', icon: '⑂' },
          { title: 'Application server', detail: 'Server runtime request receive karta hai aur app code tak pohanchata hai.', group: 'server', icon: '▤' },
          { title: 'Routing', detail: 'URL aur method ke mutabiq route ya handler chuna jata hai.', group: 'server', icon: '⌘' },
          { title: 'Middleware', detail: 'Route ke mutabiq auth, logging ya input validation jaisay checks chal sakte hain.', group: 'server', icon: '⚙' },
          { title: 'Business logic', detail: 'App ka code request samajh kar kaam karta aur response data tayyar karta hai.', group: 'server', icon: '{ }' },
          { title: 'Database query', detail: 'Zaroorat par server database ko query ya update bhejta hai.', group: 'database', icon: '▦' },
          { title: 'Database result', detail: 'Database query ka result ya write status server ko wapas deta hai.', group: 'database', icon: '▤' },
          { title: 'Response prepare', detail: 'Server result ko status code, headers aur body ke saath response mein rakhta hai.', group: 'response', icon: '▧' },
          { title: 'HTTP response', detail: 'Response status, headers aur HTML, JSON ya doosra content client ko bheja jata hai.', group: 'response', icon: '↓' },
          { title: 'Proxy return', detail: 'Agar proxy/load balancer ho, to response us ke zariye browser tak wapas aa sakta hai.', group: 'response', icon: '⑂' },
          { title: 'TLS transport', detail: 'HTTPS response encrypted connection par travel karta hai; TLS dono directions ko protect karta hai.', group: 'response', icon: '▣' },
          { title: 'Connection return', detail: 'Response existing connection par aa sakta hai; har request ke liye naya connection lazmi nahi.', group: 'response', icon: '⇄' },
          { title: 'Browser receives', detail: 'Browser response status aur content receive karke agla qadam chunta hai.', group: 'browser', icon: '▱' },
          { title: 'Page rendering', detail: 'Browser HTML parse karta, CSS apply karta aur JavaScript chalakar UI dikhata hai.', group: 'browser', icon: '✓' },
        ],
        httpMethods: [
          { name: 'GET', detail: 'Data parhna' },
          { name: 'POST', detail: 'Naya data bhejna' },
          { name: 'PUT / PATCH', detail: 'Data replace ya update karna' },
          { name: 'DELETE', detail: 'Data delete karna' },
        ],
        statusCodes: [
          { code: '200', label: 'OK · kamyab' },
          { code: '201', label: 'Created · naya record' },
          { code: '400', label: 'Bad Request · ghalat input' },
          { code: '401 / 403', label: 'Login darkar / ijazat nahi' },
          { code: '404', label: 'Not Found · route ya data nahi' },
          { code: '500', label: 'Server Error · server side masla' },
        ],
        flowNotes: [
          'DNS cache, keep-alive connections aur browser cache ki wajah se kuch steps har request par dobara nahi chalte.',
          'Reverse proxy aur database optional hain; simple static page mein server/database query ho bhi nahi sakti.',
          'Yeh diagram TCP + TLS over HTTPS ka aam model dikhata hai. HTTP/3 QUIC use karta hai.',
        ],
      },
      {
        title: 'Node.js Event Loop',
        heading: 'Node.js aik thread par bohat se I/O kaam kaise sambhalta hai?',
        definition: 'Node.js aam JavaScript callbacks ko Event Loop ke zariye aik main thread par chalata hai. I/O ka intezar khud JavaScript thread par nahi rukta: OS ya libuv ke Worker Pool ko kaam diya jata hai, phir completion par callback chalti hai.',
        concept: 'SINGLE JS THREAD · ASYNC I/O',
        eventLoopGuide: true,
        loopStages: [
          { title: 'Client request', detail: 'Kai clients aik waqt mein request bhej sakte hain.', icon: '▱', color: 'blue' },
          { title: 'Call Stack', detail: 'JavaScript handler ka code main JS thread par chalta hai.', icon: '▤', color: 'purple' },
          { title: 'Async I/O shuru', detail: 'File, network ya doosri async operation start hoti hai.', icon: '↗', color: 'orange' },
          { title: 'Background work', detail: 'OS ya zaroorat par libuv Worker Pool I/O sambhalta hai.', icon: '⚙', color: 'green' },
          { title: 'Operation complete', detail: 'Data ya result tayyar hota hai; event loop ko completion ka pata chalta hai.', icon: '✓', color: 'green' },
          { title: 'Callback / Promise ready', detail: 'Callback ya Promise continuation apni queue mein wait karti hai.', icon: '▦', color: 'purple' },
          { title: 'Event Loop resumes', detail: 'Main thread free ho to callback/continuation chalata hai.', icon: '⟳', color: 'blue' },
          { title: 'Response', detail: 'App result ko client tak bhejti hai.', icon: '↓', color: 'orange' },
        ],
        threadRoles: [
          { name: 'Event Loop / main JS thread', icon: '⟳', color: 'blue', detail: 'JavaScript initialization aur callbacks ko aik ke baad aik chalata hai.' },
          { name: 'OS / kernel', icon: '◉', color: 'green', detail: 'Network jaisay I/O ko aam tor par system ke asynchronous mechanisms se sambhalta hai.' },
          { name: 'libuv Worker Pool', icon: '⚙', color: 'orange', detail: 'Kuch APIs—jaise filesystem, dns.lookup(), crypto aur zlib—ke liye background workers deta hai.' },
          { name: 'Worker Threads', icon: '⑂', color: 'purple', detail: 'CPU-heavy JavaScript ko alag JS thread par chalane ke liye. I/O ke liye pehla choice nahi.' },
        ],
        eventLoopCode: "const fs = require('node:fs');\n\nconsole.log('Start');\nfs.readFile('data.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log('File:', data);\n});\nconsole.log('End');",
        eventLoopNotes: [
          'Aam tor par JavaScript callbacks aik main thread par chalti hain; Node ke andar I/O ke liye doosray mechanisms bhi kaam karte hain.',
          'CPU-heavy synchronous code Event Loop ko rok sakta hai. Aise kaam ke liye Worker Threads ya separate process dekhein.',
          'Yeh learning diagram simplified hai: Node Event Loop mein phases aur Promise/process.nextTick queues ke apne rules hotay hain.',
        ],
      },
      {
        title: 'SQL Joins',
        heading: 'SQL JOINs: tables ka related data jorna',
        definition: 'JOIN do ya zyada tables ke rows ko related column ki bunyaad par milata hai. Yahan Students aur Enrollments ki chhoti tables se har join ka farq dekhein.',
        concept: 'RELATED ROWS · JOIN TYPES',
        sqlJoinsGuide: true,
        joinTables: [
          { title: 'Students', columns: ['student_id', 'name'], rows: [['1', 'Ali'], ['2', 'Zohaib'], ['3', 'Ahmed'], ['4', 'Bilal']] },
          { title: 'Enrollments', columns: ['student_id', 'course'], rows: [['1', 'CS301'], ['2', 'CS401'], ['2', 'CS610'], ['5', 'CS403']] },
        ],
        joinTypes: [
          { name: 'INNER JOIN', color: 'blue', icon: '∩', short: 'Sirf woh rows jin ka match dono tables mein ho.', query: 'SELECT s.name, e.course\nFROM Students s\nINNER JOIN Enrollments e\n  ON s.student_id = e.student_id;', headers: ['name', 'course'], rows: [['Ali', 'CS301'], ['Zohaib', 'CS401'], ['Zohaib', 'CS610']], takeaway: 'Common / matching rows only' },
          { name: 'LEFT JOIN', color: 'green', icon: '◖', short: 'Left table ke tamam rows; match na ho to right side NULL.', query: 'SELECT s.name, e.course\nFROM Students s\nLEFT JOIN Enrollments e\n  ON s.student_id = e.student_id;', headers: ['name', 'course'], rows: [['Ali', 'CS301'], ['Zohaib', 'CS401'], ['Zohaib', 'CS610'], ['Ahmed', 'NULL'], ['Bilal', 'NULL']], takeaway: 'Students sab; unmatched course NULL' },
          { name: 'RIGHT JOIN', color: 'purple', icon: '◗', short: 'Right table ke tamam rows; match na ho to left side NULL.', query: 'SELECT s.name, e.course\nFROM Students s\nRIGHT JOIN Enrollments e\n  ON s.student_id = e.student_id;', headers: ['name', 'course'], rows: [['Ali', 'CS301'], ['Zohaib', 'CS401'], ['Zohaib', 'CS610'], ['NULL', 'CS403']], takeaway: 'Enrollments sab; CS403 ka student NULL' },
          { name: 'FULL OUTER JOIN', color: 'orange', icon: '◉', short: 'Dono tables ke tamam rows; jahan match nahi, wahan NULL.', query: 'SELECT s.name, e.course\nFROM Students s\nFULL OUTER JOIN Enrollments e\n  ON s.student_id = e.student_id;', headers: ['name', 'course'], rows: [['Ali', 'CS301'], ['Zohaib', 'CS401'], ['Zohaib', 'CS610'], ['Ahmed', 'NULL'], ['Bilal', 'NULL'], ['NULL', 'CS403']], takeaway: 'Dono taraf ke matches aur unmatched rows' },
          { name: 'CROSS JOIN', color: 'cyan', icon: '×', short: 'Har left row ko har right row ke saath milata hai.', query: 'SELECT s.name, e.course\nFROM Students s\nCROSS JOIN Enrollments e;', headers: ['Students', 'Enrollments'], rows: [['Ali', 'CS301'], ['Ali', 'CS401'], ['Ali', 'CS610'], ['Ali', 'CS403'], ['Zohaib', 'CS301'], ['…', '…']], takeaway: '4 × 4 = 16 combinations' },
          { name: 'SELF JOIN', color: 'pink', icon: '↻', short: 'Aik table ko usi table ke saath aliases se join karte hain.', query: 'SELECT e.name AS Employee,\n       m.name AS Manager\nFROM Employees e\nLEFT JOIN Employees m\n  ON e.manager_id = m.emp_id;', headers: ['Employee', 'Manager'], rows: [['Ali', 'NULL'], ['Zohaib', 'Ali'], ['Ahmed', 'Ali']], takeaway: 'Employee → manager hierarchy', visualTables: ['Employees e', 'Employees m'], sourceTable: { columns: ['emp_id', 'name', 'manager_id'], rows: [['1', 'Ali', 'NULL'], ['2', 'Zohaib', '1'], ['3', 'Ahmed', '1']] } },
        ],
        joinNotes: [
          'LEFT ya RIGHT ka naam batata hai ke kis side ke tamam rows bachaye jate hain.',
          'Outer join mein match na milne wali doosri side ke columns NULL dikhte hain.',
          'CROSS JOIN mein 4 × 4 rows se 16 combinations bante hain; output bohat bara ho sakta hai.',
          'MySQL mein FULL OUTER JOIN seedha supported syntax nahi; LEFT JOIN aur unmatched RIGHT-side rows ko UNION ALL se jor kar aam tor par emulate karte hain.',
          'SELF JOIN ke liye e aur m jaise aliases zaroori hain, taake aik table ki dono roles alag pehchani ja saken.',
        ],
      },
      {
        title: 'Frontend & Backend',
        heading: 'Frontend aur backend ka practical cheat sheet',
        definition: 'Responsive Tailwind layout se le kar .env secrets, Supabase database connection, Google OAuth aur package tools tak — har hissa apna alag role nibhata hai.',
        concept: 'UI · SECRETS · DATABASE · AUTH',
        frontendBackendGuide: true,
        responsiveSteps: [
          { name: 'Mobile base', prefix: 'unprefixed', width: 'Har screen', example: 'text-sm', detail: 'Default style pehle mobile ke liye likhein.' },
          { name: 'sm', prefix: 'sm:', width: '640px+', example: 'sm:text-base', detail: 'Small breakpoint aur us se bari screens par override.' },
          { name: 'md', prefix: 'md:', width: '768px+', example: 'md:grid-cols-2', detail: 'Medium screens par layout badlein.' },
          { name: 'lg', prefix: 'lg:', width: '1024px+', example: 'lg:text-lg', detail: 'Bari screen par mazeed space use karein.' },
          { name: 'xl', prefix: 'xl:', width: '1280px+', example: 'xl:grid-cols-4', detail: 'Extra-wide desktop ke liye.' },
          { name: '2xl', prefix: '2xl:', width: '1536px+', example: '2xl:max-w-7xl', detail: 'Bohat bari screens ke liye.' },
        ],
        envFiles: [
          { title: '.env.local', badge: 'PRIVATE', color: 'green', detail: 'Local machine ke asli credentials. Is file ko Git mein commit na karein.', code: 'DATABASE_URL=postgresql://…\nNEXT_PUBLIC_SUPABASE_URL=https://…\nNEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_…\nSUPABASE_SECRET_KEY=sb_secret_…' },
          { title: '.gitignore', badge: 'GIT RULES', color: 'purple', detail: 'Git ko batata hai kaun si files repository mein add nahi karni.', code: '.env*\n!.env.example\nnode_modules/\n.next/\ndist/' },
          { title: '.env.example', badge: 'SHAREABLE TEMPLATE', color: 'blue', detail: 'Fake placeholders ke saath required variable names dikhayein; asli keys nahi.', code: 'DATABASE_URL=your_database_url\nNEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co\nNEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key\nSUPABASE_SECRET_KEY=server_only_secret' },
        ],
        cmsTypes: [
          { title: 'Collection', icon: '▤', color: 'blue', definition: 'Repeat hone wale items ka group. Har item aik jaisay fields share karta hai.', examples: ['Posts', 'Products', 'Users', 'Media'], flow: 'Collection → kai records' },
          { title: 'Global content', icon: '◎', color: 'green', definition: 'Aisa shared content ya setting jiska aik hi current version poori site par use hota hai.', examples: ['Hero settings', 'Site settings', 'Footer', 'Navbar'], flow: 'Global → site-wide aik version' },
        ],
        connectionParts: [
          { label: 'User', example: 'postgres.[PROJECT_REF]', note: 'Pooler username project ref ke saath' },
          { label: 'Password', example: '[YOUR_PASSWORD]', note: 'Dashboard se copy karein; URL mein encode karein' },
          { label: 'Host', example: '[POOLER_HOST]', note: 'Connect dialog se exact host copy karein' },
          { label: 'Port', example: '5432 / 6543', note: 'Connection mode ke mutabiq' },
          { label: 'Database', example: 'postgres', note: 'Aksar default database name' },
        ],
        authSteps: [
          { title: 'Sign in click', detail: 'User app mein Google sign-in chunta hai.', icon: '●', color: 'blue' },
          { title: 'Google consent', detail: 'Supabase user ko Google par bhejta hai.', icon: 'G', color: 'orange' },
          { title: 'Provider callback', detail: 'Google auth result Supabase Auth ko wapas deta hai.', icon: '↩', color: 'purple' },
          { title: 'App callback', detail: 'Supabase user ko app ke allowed callback URL par bhejta hai.', icon: '⌁', color: 'cyan' },
          { title: 'Session', detail: 'App callback code exchange karke user session banati hai.', icon: '✓', color: 'green' },
        ],
        packageTools: [
          { name: 'npm', role: 'Package manager', detail: 'Node.js ke saath aam default tool; dependencies install aur scripts run karta hai.', command: 'npm install', color: 'red' },
          { name: 'pnpm', role: 'Package manager', detail: 'Shared content-addressed store aur links se packages ko disk par efficiently manage karta hai.', command: 'pnpm install', color: 'orange' },
          { name: 'npx', role: 'Package command runner', detail: 'npm package ka command chalao; yeh khud package manager nahi.', command: 'npx create-vite@latest', color: 'blue' },
          { name: 'yarn', role: 'Package manager', detail: 'npm ka alternative; dependencies, scripts aur workspaces manage karta hai.', command: 'yarn install', color: 'purple' },
          { name: 'bun', role: 'All-in-one JS toolkit', detail: 'Runtime, package manager, test runner aur bundler aik toolkit mein deta hai.', command: 'bun install', color: 'green' },
        ],
        frontendNotes: [
          'Tailwind mobile-first hai: unprefixed classes base hain; sm:, md: aur lg: us breakpoint se aage style lagate hain.',
          'Database connection string sirf trusted backend mein rakhein. Browser se Supabase Data API use hoti hai.',
          'Supabase publishable key browser mein reh sakti hai jab tables par sahi RLS policies hon; secret key backend tak mehdood rakhein.',
          'OAuth provider secret ko app code mein nahi, Supabase ke provider settings mein configure karein. Callback URL exact allow-listed honi chahiye.',
          'Collection aur Global CMS labels hain; inka exact behavior aapke CMS ya tool ke mutabiq farq kar sakta hai.',
        ],
      },
      {
        title: 'Supabase Storage Buckets',
        heading: 'Supabase Storage: files ko buckets mein rakhna',
        definition: 'Images, PDFs aur videos ko Storage mein file ki tarah rakhein. PostgreSQL mein aam tor par file ka metadata, bucket aur path rehta hai; app authorized URL ya API se file leti hai.',
        concept: 'FILES · BUCKETS · ACCESS',
        storageBucketsGuide: true,
        storageSteps: [
          { title: 'User file bhejta hai', detail: 'App image, PDF ya video ko upload request mein attach karti hai.', icon: '↑', color: 'blue' },
          { title: 'Policy check hoti hai', detail: 'Storage policy user aur bucket ke mutabiq upload allow ya deny karti hai.', icon: '▣', color: 'purple' },
          { title: 'File Storage mein', detail: 'Actual binary file object storage mein rakhi jati hai.', icon: '▤', color: 'green' },
          { title: 'Metadata database mein', detail: 'Bucket, path aur file metadata Postgres mein record hota hai.', icon: '▦', color: 'orange' },
          { title: 'Authorized URL', detail: 'Public asset ka URL ya private file ka signed URL app ko milta hai.', icon: '↗', color: 'cyan' },
        ],
        storageBuckets: [
          { title: 'Public bucket', color: 'blue', icon: '◎', access: 'Jis ke paas object URL ho, woh file dekh sakta hai.', examples: ['Profile pictures', 'Website images', 'Blog media'], urlLabel: 'Public object URL', url: '…/storage/v1/object/public/avatars/profile.jpg', check: 'Download ke liye user login zaroori nahi; upload/delete par policies phir bhi apply hoti hain.' },
          { title: 'Private bucket', color: 'purple', icon: '▣', access: 'Public URL se file nahi khulti; user JWT + RLS ya signed URL darkar hota hai.', examples: ['Private documents', 'Invoices', 'Sensitive photos'], urlLabel: 'Signed URL · misaal 60 sec', url: '…/storage/v1/object/sign/private-docs/report.pdf?token=…', check: 'Jis ke paas signed link ho, woh uski expiry tak file access kar sakta hai.' },
        ],
        storageAccessSteps: [
          { title: 'File ki request', detail: 'User protected file download karna chahta hai.', icon: '●' },
          { title: 'User + policy check', detail: 'App user ki identity aur file ki permission check karti hai.', icon: '✓' },
          { title: 'Temporary link', detail: 'Allowed ho to signed URL chhoti expiry ke saath banta hai.', icon: '⌁' },
          { title: 'Download / view', detail: 'Link expiry se pehle file kholta hai; baad mein expire ho jata hai.', icon: '↓' },
        ],
        signedUrlCode: "const { data, error } = await supabase\n  .storage\n  .from('private-docs')\n  .createSignedUrl('reports/report.pdf', 60);\n\nif (data) {\n  console.log(data.signedUrl);\n}",
        storageNotes: [
          'Private buckets default hain; private download ke liye user JWT ke saath RLS policy ya expiry wala signed URL use karein.',
          'Public bucket ka matlab public download hai. Is se upload, delete, move aur copy automatically public nahi hote.',
          'Storage ki access policies storage.objects table par banti hain; woh app ki doosri tables ki RLS policies se alag hoti hain.',
          'Storage ka metadata Postgres mein hota hai, lekin actual file object storage provider mein rehti hai. Storage records ko SQL se delete na karein; Storage API use karein.',
          'Signed URL temporary bearer link hai: short expiry dein aur ise public jagah ya logs mein share na karein.',
          'Asli API secret ya service key browser mein kabhi na rakhein. Storage access RLS policies ko bhi separately configure karein.',
        ],
      },
      {
        title: 'Project Architecture & DevOps',
        heading: 'Project ko organize, build aur deploy karna',
        definition: 'Project ko chhoti, wazeh files mein rakhein; secrets Git se bahar; aur Railway par repository connect karke build, start aur logs verify karein.',
        concept: 'PROJECT ROOT → BUILD → RAILWAY',
        architectureDevopsGuide: true,
        projectFiles: [
          { path: 'index.html', kind: 'PAGE', detail: 'App ka entry page aur tab layout.' },
          { path: 'styles.css', kind: 'STYLE', detail: 'Dark theme, responsive layout aur lesson diagrams.' },
          { path: 'script.js', kind: 'CONTENT + UI', detail: 'Chapters, hover navigation aur lesson rendering.' },
          { path: 'scripts/build.mjs', kind: 'BUILD', detail: 'Website files ko dist/ mein copy karta hai.' },
          { path: 'server.mjs', kind: 'START', detail: 'Railway ke PORT par dist/ ko serve karta hai.' },
          { path: 'dist/', kind: 'GENERATED', detail: 'Build output; Git mein commit nahi hota.' },
        ],
        organizationCards: [
          { title: 'Collection', color: 'blue', icon: '▦', definition: 'Repeat hone wale records ka group; har record mein aam tor par fields ka same shape hota hai.', examples: ['Posts', 'Products', 'Users', 'Categories'] },
          { title: 'Global content', color: 'green', icon: '◎', definition: 'Site par shared aik current version wala content ya setting. CMS ke hisaab se naam aur behavior badal sakta hai.', examples: ['Hero section', 'Footer', 'Navbar', 'Site settings'] },
        ],
        environmentFiles: [
          { title: '.env.local', color: 'purple', definition: 'Local environment values aur secrets; ise Git mein commit na karein.', code: 'DATABASE_URL=postgresql://…\nJWT_SECRET=your_secret_value\nNODE_ENV=development' },
          { title: '.gitignore', color: 'blue', definition: 'Git ko batata hai kin files aur folders ko repository se skip karna hai.', code: '.env*\n!.env.example\nnode_modules/\ndist/\n*.log' },
          { title: '.env.example', color: 'green', definition: 'Team ke liye safe template: sirf variable names aur fake placeholders commit karein.', code: 'DATABASE_URL=your_database_url\nJWT_SECRET=replace_me\nNODE_ENV=production' },
        ],
        railwaySteps: [
          { title: 'GitHub par push', detail: 'Code commit karke repo ki branch par push karein.', icon: '⌘', color: 'blue' },
          { title: 'Railway repo connect', detail: 'Naya project bana kar GitHub repository service se connect karein.', icon: '↔', color: 'purple' },
          { title: 'Variables set', detail: 'Service Variables mein sirf app ke required values add karein.', icon: '⚙', color: 'orange' },
          { title: 'Build + start', detail: 'Build: npm run build. Start: npm start. Logs mein result verify karein.', icon: '›_', color: 'green' },
          { title: 'Domain generate', detail: 'Deploy theek chale to Networking se public domain generate karein.', icon: '◎', color: 'cyan' },
        ],
        railwayCommands: [
          { label: 'Local build', command: 'npm run build' },
          { label: 'Local server', command: 'npm start' },
          { label: 'Railway PORT', command: 'process.env.PORT || 3000' },
          { label: 'Listen address', command: '0.0.0.0' },
        ],
        troubleshooting: [
          { title: 'Build fail ho', icon: '×', color: 'red', checks: ['Node version aur build logs dekhein.', 'npm run build local par chala kar error dhoondein.', 'Package scripts aur file paths check karein.'] },
          { title: 'Migration na chale', icon: '▤', color: 'orange', checks: ['DATABASE_URL sahi service variable mein hai?', 'Migration command aur script configured hain?', 'Database user ke paas zaroori permission hai?'], note: 'Is static project ko abhi database migration darkar nahi.' },
          { title: 'Images gayab hon', icon: '▧', color: 'blue', checks: ['Local assets build output mein copy hue?', 'URL/path aur letter case theek hai?', 'Remote storage URL aur access rules sahi hain?'] },
        ],
        devopsNotes: [
          'Railway aam tor par package scripts se build/start command detect karta hai; zaroorat par service settings mein manual command dein.',
          'Railway service ko PORT environment variable se milta hai; app ko 0.0.0.0 par listen karna chahiye.',
          'Railway Variables build aur running service dono ko mil sakte hain. Secret values GitHub par push na karein.',
          'Build logs compile/install errors dikhate hain; deploy logs running app ka stdout/stderr dikhate hain.',
          'Migration sirf tab chalayein jab project mein database aur migration script waqai configured hon.',
        ],
      },
      {
        title: 'Acronyms & Common Terms',
        heading: 'Computer aur technology ke aam terms',
        definition: 'Short forms, networking, hardware, coding aur rozmarra ke technical alfaaz ko aik jagah samjhein.',
        concept: 'QUICK GLOSSARY · A-Z',
        glossarySections: [
          {
            title: 'Web, software aur internet',
            items: [
              { term: 'Acronym aur initialism', detail: 'Acronym ke initials mil kar aik lafz ki tarah bole jate hain, jaise NASA. Initialism mein har letter alag bola jata hai, jaise DOM.' },
              { term: 'API', detail: 'Application Programming Interface: rules aur functions ka woh interface jiske zariye software ke hisson ko aik doosre se baat karne ka tareeqa milta hai.' },
              { term: 'DOM', detail: 'Document Object Model: HTML ya XML document ki tree-shaped representation aur usay read ya update karne wali programming interface. DOM aam tor par letters ke naam se bola jata hai.' },
              { term: 'HTTP', detail: 'Hypertext Transfer Protocol: web par browser aur server ke darmiyan requests aur responses ke liye istemaal hone wala protocol.' },
              { term: 'IP address', detail: 'Internet Protocol address network par kisi interface ko pehchanne aur data route karne mein madad deta hai. Yeh private ya public ho sakta hai aur badal bhi sakta hai.' },
              { term: 'ISP', detail: 'Internet Service Provider: company ya idara jo internet connection deta hai; kuch ISPs email, hosting ya doosri services bhi dete hain.' },
              { term: 'JSON', detail: 'JavaScript Object Notation: applications ke darmiyan structured data bhejne aur receive karne ka text format. JSON khud API nahi hota; API JSON use kar sakti hai.' },
              { term: 'Pull request (PR)', detail: 'Repository mein proposed code changes ko review karne aur baad mein merge karne ka tareeqa.' },
              { term: 'Same-origin policy', detail: 'Browser security rule jo aik origin ke page ko doosre origin ka data freely read karne se rokta hai. Origin mein scheme, host aur port shamil hote hain.' },
              { term: 'Open source', detail: 'Software jiska source code available ho aur license use, change ya share karne ki ijazat de. Har open-source software lazmi free of cost nahi hota.' },
              { term: 'Virus', detail: 'Malware ki aik qisam jo doosri files ya programs ke saath attach ho kar phail sakti hai. Har malware virus nahi hota.' },
            ],
          },
          {
            title: 'Networks aur mobile data',
            items: [
              { term: 'LAN', detail: 'Local Area Network: ghar, school, lab ya office jaisi mehdood jagah ke devices ko jorne wala network.' },
              { term: 'MAN', detail: 'Metropolitan Area Network: aik shehar ya metropolitan area mein mukhtalif LANs ko jorne wala network.' },
              { term: 'WAN', detail: 'Wide Area Network: bari geographic distance par offices, data centers ya networks ko jorne wala network; Internet iski aik wasee misaal hai.' },
              { term: 'PAN', detail: 'Personal Area Network: aik shakhs ke qareeb personal devices ka network, jaise Bluetooth se phone aur headphones ka connection. Range technology aur environment ke mutabiq hoti hai.' },
              { term: 'GPRS', detail: 'General Packet Radio Service: GSM mobile networks par packet-based data service, jo aam tor par 2G se mansub hai.' },
            ],
          },
          {
            title: 'Computer hardware aur electronics',
            items: [
              { term: 'BIOS', detail: 'Basic Input/Output System: motherboard firmware jo computer start hote waqt hardware initialize karke boot process shuru karta hai. Naye systems mein aam tor par UEFI use hota hai.' },
              { term: 'MSINFO32', detail: 'Windows System Information utility ko kholne wala command. Yeh hardware, system components aur software environment ki maloomat jama karke diagnostics mein madad deta hai.' },
              { term: 'CMD', detail: 'Windows Command Prompt ka aam naam. Yeh command-line interpreter hai; terminal woh app hoti hai jisme command-line shell chal sakta hai.' },
              { term: 'LCD', detail: 'Liquid Crystal Display: display technology jo liquid crystals aur light control karke image dikhati hai.' },
              { term: 'LED', detail: 'Light-Emitting Diode: semiconductor component jo current guzarnay par roshni nikalta hai.' },
              { term: 'POST', detail: 'Power-On Self-Test: startup par firmware ke basic hardware checks, jo computer boot hone se pehle chal sakte hain.' },
              { term: 'SMPS', detail: 'Switched-Mode Power Supply: power supply jo switching circuits ke zariye voltage convert aur regulate karti hai.' },
              { term: 'USB', detail: 'Universal Serial Bus: devices ko connect karne aur supported standards ke mutabiq data ya power transfer karne ka standard.' },
              { term: 'VDU', detail: 'Visual Display Unit: screen ya monitor jaisa output device jo computer ki visual information dikhata hai.' },
            ],
          },
          {
            title: 'Programming ke bunyadi concepts',
            items: [
              { term: 'Function definition', detail: 'Function define karna uska naam, parameters aur body likhna hai; body batati hai function call hone par kya kaam karega.' },
              { term: 'Parameter aur argument', detail: 'Parameter function definition mein naam diya gaya input hota hai. Argument function call karte waqt di gayi asal value hoti hai.' },
              { term: 'return statement', detail: 'Function mein return execution ko khatam karke optional value caller ko deta hai. React component ka returned JSX React render karta hai; woh khud HTML ID mein direct nahi jata.' },
              { term: 'Conditional rendering', detail: 'JavaScript mein condition ? thenValue : elseValue ka matlab hai: condition true ho to pehli value, warna doosri. React mein isay UI ki shartiya rendering ke liye use kar sakte hain.' },
              { term: 'React Fragment', detail: 'Fragment multiple React children ko aik group mein rakhta hai magar extra wrapper element DOM mein add nahi karta.' },
              { term: 'HTML boilerplate', detail: 'HTML document ka starter structure, aam tor par doctype, html, head aur body sections par mushtamil hota hai.' },
              { term: 'HTML button type', detail: 'Form ke andar &lt;button&gt; ka default type submit hota hai. Menu ya dialog kholne jaisay action ke liye `type="button"` dein, taake form ghalti se submit na ho.' },
              { term: 'Framework aur library', detail: 'Library ko app ka code zaroorat par call karta hai. Framework aam tor par app ka overall flow sambhalta hai aur aapke code ko muqarrar points par call karta hai.' },
              { term: 'High-level language (HLL)', detail: 'Programming language jo insani samajh ke zyada qareeb hoti hai aur hardware details ko chhupati hai.' },
              { term: 'Low-level language (LLL)', detail: 'Programming language jo machine instructions ya hardware ke zyada qareeb hoti hai; machine code binary instructions ki aik misaal hai.' },
            ],
          },
          {
            title: 'Word casing',
            items: [
              { term: 'camelCase', detail: 'Pehla word lowercase hota hai; aglay words ka pehla letter capital hota hai, jaise heIsABoy.' },
              { term: 'kebab-case', detail: 'Words lowercase mein hote hain aur hyphen se judte hain, jaise he-is-a-boy.' },
              { term: 'PascalCase', detail: 'Har word ka pehla letter capital hota hai aur spaces nahi hotin, jaise HeIsABoy.' },
              { term: 'SCREAMING_SNAKE_CASE', detail: 'Tamam letters uppercase aur words underscore se alag hote hain, jaise HE_IS_A_BOY.' },
              { term: 'snake_case', detail: 'Tamam words lowercase aur underscore se alag hote hain, jaise he_is_a_boy.' },
            ],
          },
          {
            title: 'Media, business aur doosre terms',
            items: [
              { term: 'Android', detail: 'Mobile operating system platform. Android kisi company ka naam nahi; Google Android platform aur AOSP project ki development mein aham kirdar rakhta hai.' },
              { term: 'Apple', detail: 'Technology company jo iPhone, Mac, operating systems aur doosri products banati hai.' },
              { term: 'AVI', detail: 'Audio Video Interleave: digital video aur audio ko aik file mein rakhne wala multimedia container format.' },
              { term: 'ICO', detail: 'Initial Coin Offering: crypto project token offer karke funds jama karne ka tareeqa. Is mein investment risk bohat zyada ho sakta hai.' },
              { term: 'IPO', detail: 'Initial Public Offering: jab private company pehli dafa public investors ko apne shares offer karti hai.' },
              { term: 'MP3', detail: 'Digital audio ko compress aur store karne ka mashhoor lossy audio format; yeh AVI jaisa general multimedia container nahi.' },
              { term: 'OMR', detail: 'Optical Mark Recognition: paper forms par bhare hue bubbles ya marks ko scan karke pehchanne ki technology.' },
              { term: 'SaaS', detail: 'Software as a Service: internet par provider ke hosted software ko app ya browser se use karna; billing subscription ya usage-based ho sakti hai.' },
              { term: 'Service-based aur product-based company', detail: 'Service-based company clients ke liye kaam ya expertise deti hai. Product-based company apna product banati aur bechti hai. Aik company dono kar sakti hai.' },
              { term: 'CV', detail: 'Curriculum Vitae: taleem, kaam ke tajurbe, skills aur relevant achievements ka record jo job ya academic application ke saath diya jata hai. CV ki lambai aur format ilaqay aur role ke mutabiq farq ho sakta hai.' },
              { term: 'Cover letter', detail: 'Job application ke saath bheja gaya mukhtasar, role-specific khat. Is mein bataya jata hai ke aapka tajurba aur skills us position se kaise match karte hain; yeh CV ko repeat karne ke bajaye usay context deta hai.' },
              { term: 'TIME Magazine', detail: 'TIME magazine ka naam hai; “The International Magazine of Events” iska official full form nahi. TIME apne aaghaz ko 1923 ke weekly news magazine ke taur par bayan karta hai.' },
            ],
          },
          {
            title: 'Number systems aur bases',
            items: [
              { term: 'Duotrigesimal', detail: 'Base-32 positional number system ka naam. Har digit ki jagah 32 ki power ko represent karti hai. Digit symbols ki notation scheme badal sakti hai; aik common scheme mein 0–9 ke baad A–V use hote hain.' },
            ],
          },
          {
            title: 'English ke aam lafz',
            items: [
              { term: 'Psst', detail: 'Halki ya chupke se nikali jane wali awaaz, aksar kisi ki tawajjoh lene ke liye.' },
              { term: 'Grunting', detail: 'Gale se nikali jane wali chhoti, bhaari awaaz; kabhi mehnat, takleef ya narazgi mein.' },
              { term: 'Chuckling', detail: 'Dheemi ya halki hansi.' },
              { term: 'Atheist', detail: 'Aisa shakhs jo God ya gods par yaqeen nahi rakhta.' },
              { term: 'Agnostic', detail: 'Aisa shakhs jo God ya gods ke wajood ko maloom ya yaqini taur par sabit karna mumkin na samjhe. Atheism aur agnosticism aik doosre ko lazmi tor par exclude nahi karte.' },
              { term: 'Sporadically', detail: 'Kabhi kabhar ya ghair-muqarrar waqfon se; yani regular schedule par nahi.' },
              { term: 'Dictate', detail: 'Context ke mutabiq zor se bol kar likhwana, hukm dena, ya kisi cheez ko tay/control karna.' },
              { term: 'Disposal', detail: 'Kisi cheez se chutkara pane ka amal; “at your disposal” ka matlab hai aap ke istemaal ke liye dastiyab.' },
              { term: 'Sparingly', detail: 'Kam miqdaar mein ya ehtiyaat se, taa-ke cheez zaya na ho.' },
              { term: 'Pseudo', detail: 'Aisa prefix jo kisi cheez ko zahiri ya naqli bataye, magar asal/genuine na ho.' },
              { term: 'Sophisticated', detail: 'Context ke mutabiq advanced aur complex, ya refined aur bareek samajh wala.' },
              { term: 'Catalyst', detail: 'Aapka original note: “Catalyst != Hindrance.” Dono aik jaisa matlab nahi rakhte, magar strict antonyms bhi nahi. Catalyst tabdeeli ko shuru ya tez karne wala sabab hai; science mein reaction ko tez karta hai aur khud permanently consume nahi hota.' },
              { term: 'Hindrance', detail: 'Rukawat ya mushkil jo kaam ko dheema ya mushkil banaye.' },
              { term: 'Freaked out', detail: 'Aapka original note: “Freaked = behave in a wild and irregular way.” “Freaked out” informal phrase hai jo achanak bohat ghabra ya pareshan hone ko kehti hai; “freak” ke aur meanings bhi context par depend karte hain.' },
              { term: 'Sacrifice', detail: 'Aapka original note: “Sacrifice = mean it’s dead from my side.” Yeh aapka personal/mnemonic sense hai, dictionary meaning nahi. Aam meaning: kisi maqsad ke liye qeemti cheez, waqt ya aaraam chhorna.' },
            ],
          },
          {
            title: 'Software aur web ke concepts',
            items: [
              { term: 'Browser extension / plug-in', detail: 'Aapka original note: “Plug-ins are computer programs that extend standard functionality of browser, like FoodPanda, InDrive etc.” Pehla hissa durust hai; Foodpanda aur InDrive standalone apps/services hain. Browser ad blocker ya password manager extension browser mein feature add karte hain.' },
              { term: 'Cache', detail: 'Aapka original note: “Cache = Internet history, you visited recently.” Correction: cache data ki aarzi copy hai jo dobara use karke loading tez kar sakti hai. Browsing history visited pages ki alag list hoti hai.' },
              { term: 'Default import', detail: 'ES module ka default export import karte waqt local naam aap khud rakh sakte hain. Misal: `import api from "./client.js"` mein `api` local naam hai.' },
              { term: 'Configure', detail: 'Software ya device ki settings ko zaroorat ke mutabiq set ya arrange karna.' },
              { term: 'Alias', detail: 'Aapka original note: “Alias = false or assumed identity.” Assumed/alternate naam iska aik meaning ho sakta hai; har alias false nahi hota. Programming mein alias kisi cheez ka doosra naam hota hai; import mein `as` use kar sakte hain.' },
              { term: 'Vite aur React', detail: 'Aapka original note: “Vite is upgraded version of React.” Correction: Vite development server/build tool hai; React UI banane ki JavaScript library hai. Dono aik project mein saath kaam karte hain.' },
            ],
          },
        ],
      },
      {
        title: 'Windows Version History',
        heading: 'Windows ka safar: 1985 se 2021 tak',
        definition: 'Microsoft Windows ki major desktop releases ko chronological order mein dekhein. Har version ka year launch year hai; yeh tamam editions ki mukammal list nahi.',
        concept: 'WINDOWS · RELEASE TIMELINE',
        timelineFooter: '1985 → 2021 · MAJOR RELEASES',
        windowsTimeline: [
          { version: 'Windows 1.0', year: '1985', detail: 'Windows ki pehli retail release; MS-DOS ke upar graphical interface deti thi.' },
          { version: 'Windows 2.0', year: '1987', detail: 'Windows ke pehle versions mein se aik jahan application windows overlap kar sakti thin.' },
          { version: 'Windows 3.0', year: '1990', detail: 'Behtar graphics aur Program Manager ke saath Windows ka istemaal zyada aam hua.' },
          { version: 'Windows 95', year: '1995', detail: 'Start menu aur taskbar introduce hue; 32-bit applications ko bhi support mila.' },
          { version: 'Windows 98', year: '1998', detail: 'USB devices aur internet use ke liye behtar support diya gaya.' },
          { version: 'Windows Me', year: '2000', detail: '“Millennium Edition” ka short naam. Ghar ke users ke liye multimedia features aur System Restore par focus tha.' },
          { version: 'Windows XP', year: '2001', detail: 'Consumer Windows ko Windows NT core par le aaya; stability aur aik consistent interface is ki pehchan bane.' },
          { version: 'Windows Vista', year: '2007', detail: 'Aero visual design aur User Account Control jaisi security changes ke saath aaya.' },
          { version: 'Windows 7', year: '2009', detail: 'Windows Vista ke baad performance, usability aur taskbar mein behtari par focus kiya.' },
          { version: 'Windows 8', year: '2012', detail: 'Touch screens ko madde nazar rakh kar Start screen aur naya interface diya gaya.' },
          { version: 'Windows 8.1', year: '2013', detail: 'Windows 8 ka update; Start button wapas aaya aur interface ko refine kiya gaya.' },
          { version: 'Windows 10', year: '2015', detail: 'Start menu wapas laya aur Windows-as-a-Service ke zariye regular feature updates ka model apnaya.' },
          { version: 'Windows 11', year: '2021', detail: 'Naya visual design aur Snap Layouts ke saath release hua; is ke hardware requirements Windows 10 se mukhtalif hain.' },
        ],
      },
      {
        title: 'Network Control & Security Flow',
        heading: 'Network par control aur security ki layers',
        definition: 'Firmware, firewall, router, VPN, proxy aur DNS aik hi kaam nahi karte. Yeh mukhtalif jagahon par mil kar kaam kar sakte hain; in sab ka koi universal “override order” nahi.',
        concept: 'DEVICE → NETWORK → WEB',
        glossaryFooter: 'NAME RESOLUTION · ROUTING · POLICY · ENCRYPTION',
        glossarySections: [
          {
            title: 'Device startup aur local security',
            items: [
              { term: 'BIOS aur UEFI', detail: 'Aapka original note firmware ko “nervous system b/w hardware and windows” kehta hai. Yeh yaad rakhne ki tashbeeh hai; zyada durust taur par firmware startup par platform initialize karke OS boot ko hand off karta hai. BIOS purana PC firmware interface hai aur UEFI modern firmware specification.' },
              { term: 'TPM', detail: 'Trusted Platform Module: hardware ya firmware-based security component jo cryptographic keys protect karne aur platform integrity checks mein madad deta hai. Yeh aksar motherboard ya platform ke andar hota hai, magar har TPM alag motherboard chip nahi hota.' },
              { term: 'System firewall', detail: 'Device par network connections ko rules ke mutabiq allow ya block karta hai. VPN chalne par bhi host firewall apne rules laga sakta hai.' },
              { term: 'Hosts file', detail: 'Device ki local text file jo hostnames ko addresses se map kar sakti hai. Aam resolver setups mein yeh DNS query se pehle check hoti hai; exact behavior operating system aur app par depend karta hai.' },
            ],
          },
          {
            title: 'Network path aur traffic controls',
            items: [
              { term: 'Router / network gateway', detail: 'IP packets ko mukhtalif networks ke darmiyan forward karta hai. Router ki configuration mein NAT, firewall ya DNS relay bhi ho sakte hain, magar yeh alag functions hain.' },
              { term: 'Enterprise firewall aur DPI', detail: 'Organization ka firewall network policy ke mutabiq traffic allow, block ya log karta hai. Deep Packet Inspection packet details dekh sakti hai; HTTPS/TLS payload ko parhne ke liye aam tor par managed TLS inspection/termination chahiye.' },
              { term: 'VPN', detail: 'Aapka original note: “VPN is strong, encrypted proxy for everything.” Yeh dono alag technologies hain. VPN device/server ke darmiyan encrypted tunnel banata hai; full-tunnel zyada traffic bhejta hai, jab ke split-tunnel sirf configured routes. VPN firewall ko lazman bypass nahi karta.' },
              { term: 'Proxy', detail: 'Aapka original note proxy ko “middle man between device & internet” aur absent friend ki fake attendance se compare karta hai. Yeh forwarding ko yaad rakhne ki misaal hai: proxy client ki requests relay karta hai. Forward proxy app/browser ke liye configure ho sakta hai; reverse proxy server ke aagay requests leta hai. HTTP, SOCKS aur transparent proxy ke tareeqay mukhtalif hain.' },
            ],
          },
          {
            title: 'Naam dhoondhna aur web connection',
            items: [
              { term: 'DNS aur DNS resolver', detail: 'Aapka original note DNS ko “internet’s phonebook” aur “number to number translator” kehta hai. Phonebook tashbeeh theek hai; number-to-number kehna ghalat hai. DNS hostname (facebook.com) ke records dhoondta hai; A/AAAA record IP address deta hai. Resolver query ka jawab dhoondta hai.' },
              { term: 'HTTP', detail: 'HyperText Transfer Protocol browser/app aur server ke darmiyan requests aur responses ka web protocol hai. Akela HTTP traffic encrypt nahi karta.' },
              { term: 'HTTPS, TLS aur SSL', detail: 'HTTPS, HTTP ko TLS ke zariye protect karta hai. TLS connection ko encrypt karta aur server identity certificate ke zariye verify karne mein madad deta hai. SSL purana, obsolete protocol hai; modern HTTPS TLS use karta hai. Yeh protection transit ke liye hai, device par saved data ke liye nahi, aur na hi har website ko trustworthy sabit karti hai.' },
            ],
          },
          {
            title: 'Order ko kaise samjhein',
            items: [
              { term: 'Universal override chain nahi', detail: 'Aapka original order Firmware > TPM > DPI/enterprise firewall > router > VPN > system firewall > proxy > hosts file > DNS > HTTPS/TLS > HTTP tha. Yeh layers ka universal dominance order nahi: firmware boot mein, DNS lookup mein, router forwarding mein, firewall policy mein, aur TLS encryption mein kaam karta hai.' },
              { term: 'VPN “sab par haavi” nahi hota', detail: 'Aapka original note: “Routing control is dominance. Therefore VPN dominates.” Route ko VPN tunnel se guzarna configure ho sakta hai, magar host firewall, enterprise policy, proxy aur DNS bhi asar karte hain. Result device aur network settings par depend karta hai.' },
              { term: 'Yaad rakhne ka seedha tareeqa', detail: 'Aapka original mnemonic: “DNS decides where to go. Proxy decides who goes. VPN decides how safely you go.” Yaad rakhne ke liye useful hai, lekin mukhtasar: DNS naam ka record dhoondta hai, proxy request relay karta hai, VPN configured routes ko tunnel karta hai.' },
            ],
          },
        ],
      },
      {
        title: 'International Contact Numbering',
        heading: 'International phone codes aur numbering zones',
        definition: 'Aapka original contact-numbering note aur uski correction yahan saath hain. Aaj ka ITU-T E.164 standard country codes ko one, two ya three digits deta hai. Pehla digit purane world numbering zones se region ka andaza deta hai, lekin yeh sakht continent boundaries nahi aur assignments waqt ke saath badal sakti hain.',
        concept: 'COUNTRY CODE · WORLD ZONES · E.164',
        glossaryFooter: 'ORIGINAL NOTE · CORRECTION · EXAMPLES',
        glossarySections: [
          {
            title: 'Aapka original note aur bunyadi farq',
            items: [
              { term: 'Original contact-number note', detail: 'Aapka original note: “IInternational Telecommunication Union divided the numbers and gave prefix like +92 for pakistan. It divided world into 9 regions. +1 for NANP (North American Numbering Planning); +2 for African with three digits starting; +3, +4 lies in Europe and could be two or three starting digits; +5 for people of North America which are not part of NANP; +6 for Oceania & South Asian Countries with two or three digits; +7 for Soviet Countries; +8 for East Asian countries; +9 for South Asia & Middle East.” Is original ko yaad rakhne ke liye yahan preserve kiya hai; neeche verified correction hai.' },
              { term: 'Country calling code aur dialling prefix', detail: '+92 Pakistan ka country calling code hai. Yeh international access/dialling prefix se alag hota hai; bahar se call shuru karne ke digits caller ke mulk par depend karte hain. E.164 international number mein country code ke baad national number aata hai.' },
              { term: 'Nine world numbering zones', detail: 'Yeh pehle digit ke mutabiq codes ko yaad rakhne ki riwayati grouping hai, literal taur par duniya ko 9 siyasi ya geographic regions mein baantna nahi. Country calling codes one, two ya three digits ke ho sakte hain; kuch codes countries ke bajaye services ke liye bhi hain.' },
            ],
          },
          {
            title: 'Zones 1 se 5',
            items: [
              { term: 'Zone 1 — NANP', detail: '+1 North American Numbering Plan ke liye hai. Is shared plan mein United States, Canada aur Caribbean ke kai mulk/ilaqay shamil hain; Mexico +1 NANP ka hissa nahi.' },
              { term: 'Zone 2 — Africa', detail: '+2 se shuru hone wale country codes zyada tar African mulkon ke hain. Codes do ya teen digits ke ho sakte hain.' },
              { term: 'Zones 3 aur 4 — Europe', detail: '+3 aur +4 se shuru hone wale codes zyada tar European mulkon ko diye gaye hain. Code length do ya teen digits ho sakti hai; har code ka format alag assigned hota hai.' },
              { term: 'Zone 5 — Central aur South America', detail: '+5 zone sirf North America ke woh hisse nahi jo NANP se bahar hon; yeh Mexico samet Central aur South America ke codes ko cover karta hai.' },
            ],
          },
          {
            title: 'Zones 6 se 9',
            items: [
              { term: 'Zone 6 — Southeast Asia aur Oceania', detail: '+6 series Southeast Asia aur Oceania ke kai codes ko cover karti hai. South Asia ko poora zone 6 kehna sahi nahi.' },
              { term: 'Zone 7 — Russia aur Kazakhstan', detail: '+7 Soviet-era numbering zone se aaya. Aaj +7 Russia aur Kazakhstan share karte hain; tamam former Soviet republics +7 use nahi karte.' },
              { term: 'Zone 8 — East Asia aur kuch special codes', detail: '+8 series East Asia ke codes ke liye mashhoor hai, lekin is mein special services aur Bangladesh ka +880 code bhi aata hai; region mapping bilkul exclusive nahi.' },
              { term: 'Zone 9 — South Asia aur Middle East', detail: '+9 series mein Pakistan, India, Turkey aur Middle East ke kai mulkon ke codes hain. Is zone mein kuch Central/South Asian codes bhi shamil hain.' },
            ],
          },
          {
            title: 'Official references',
            items: [
              { term: 'ITU-T E.164 standard', detail: 'ITU ki current E.164 recommendation international public telephone numbers ki structure aur country-code assignment samjhati hai.', url: 'https://www.itu.int/rec/T-REC-E.164-202602-I', example: 'Country calling code ki length ya international number structure check karne ke liye E.164 recommendation kholo.' },
              { term: 'ITU legacy numbering-zone list (1991)', detail: 'ITU ka purana annex traditional world numbering zones aur us waqt ke country codes list karta hai. Isay historical zone grouping samjho; current assigned codes ke liye latest ITU register check karo.', url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-E.164-199108-S%21%21PDF-E&lang=e&type=items', example: 'Zone numbering ka historical pattern samajhne ke liye is purane annex ko current E.164 recommendation ke saath compare karo.' },
              { term: 'NANPA — NANP overview', detail: 'Official overview batata hai ke +1 NANP ko assign hai aur yeh shared numbering plan kin mulkon/ilaqon ko serve karta hai.', url: 'https://nanpa.com/about', example: 'Kisi +1 number ko dekh kar NANP ka area code aur 7-digit local number format overview se compare karo.' },
            ],
          },
        ],
      },
      {
        title: 'CSS Layout & Responsive Design',
        heading: 'CSS selectors, centering aur responsive screens',
        definition: 'CSS selectors elements ko target karte hain; layout rules unhein arrange karte hain; media queries screen ya user preference ke mutabiq style badalti hain.',
        concept: 'SELECT · LAYOUT · RESPOND',
        glossaryFooter: 'SELECTOR → LAYOUT → MEDIA CONDITION',
        glossarySections: [
          {
            title: 'Selectors aur hover states',
            items: [
              { term: ':has() selector', detail: ':has() parent ya element ko tab select karta hai jab us ke relative selector se koi matching element milay.' },
              { term: 'Hover ke baghair siblings', detail: '`.container:hover > :not(:hover)` hovered container ke un direct children ko target karta hai jo khud hover nahi ho rahe.' },
            ],
          },
          {
            title: 'Element ko center karne ke tareeqay',
            items: [
              { term: 'CSS Grid centering', detail: 'Grid container par `place-items: center` child ko horizontal aur vertical center karta hai.' },
              { term: 'Flexbox centering', detail: 'Flex container mein `justify-content: center` aur `align-items: center` dono axes par content center karte hain.' },
              { term: 'Position centering', detail: 'Positioned child ko `top: 50%` aur `left: 50%` par la kar `transform: translate(-50%, -50%)` se us ke apne size ke mutabiq wapas shift karte hain.' },
            ],
          },
          {
            title: 'Media queries aur breakpoints',
            items: [
              { term: 'Media query', detail: 'Media query condition match hone par CSS rules apply karti hai; misal ke taur par viewport narrow ho to layout stack karna.' },
              { term: 'Media types', detail: '`screen` screen devices, `print` printed output aur `all` tamam media types ke liye hai. `speech` speech output ke liye defined hai, magar support har browser mein barabar nahi.' },
              { term: 'Media features', detail: '`min-width`, `orientation` aur `prefers-reduced-motion` jaisi features device ya user preference check karti hain.' },
              { term: 'Breakpoint', detail: 'Breakpoint woh width hai jahan layout ko badalna zaroori ho. 600, 768, 992 ya 1200px common starting points ho sakte hain; yeh fixed standard nahi, content ke mutabiq choose karein.' },
              { term: 'Orientation', detail: '`orientation: portrait` ya `landscape` viewport ki shape ke mutabiq styles badal sakta hai.' },
            ],
          },
        ],
      },
      {
        title: 'Programming Concepts & Text Encoding',
        heading: 'Iteration, recursion, references aur UTF-16',
        definition: 'Yeh concepts code ke repeat hone, function ke dobara chalne, objects ko refer karne aur JavaScript strings ke andar text store hone ka tareeqa samjhate hain.',
        concept: 'REPEAT · REFER · ENCODE',
        glossaryFooter: 'CONCEPT → PRACTICAL EXAMPLE',
        glossarySections: [
          {
            title: 'Loops aur recursion',
            items: [
              { term: 'Iteration aur list traversal', detail: 'Iteration loop ka aik chakkar hai. Array values ke liye `for...of` use karein; `for...in` array ke keys/indexes deta hai.' },
              { term: 'Iterable object', detail: 'JavaScript object tab iterable hota hai jab us par `[Symbol.iterator]` protocol ho. Plain object default se `for...of` mein nahi chalta; `Object.entries()` uski key-value pairs ko iterable array mein deta hai.' },
              { term: 'Recursion', detail: 'Recursive function apne aap ko chhoti input ke saath call karta hai aur rokne ke liye base case rakhta hai.' },
            ],
          },
          {
            title: 'Objects aur text encoding',
            items: [
              { term: 'Object reference aur equality', detail: 'Object variable aksar object ka reference rakhta hai. Do variables same object ko point karein to `===` true hota hai; alag objects ki properties same hon tab bhi references alag ho sakte hain.' },
              { term: 'UTF-16', detail: 'JavaScript strings UTF-16 code units mein represent hoti hain. Kuch Unicode characters aik code unit lete hain, aur kuch—jaise kai emoji—do code units.' },
            ],
          },
        ],
      },
    ],
  },
  chemistry: {
    name: 'Abbreviations',
    chapters: [
      {
        title: 'Computer & Hardware Abbreviations',
        heading: 'Computer ke parts aur systems ke short forms',
        definition: 'Hardware aur operating-system ke aam abbreviations ke full forms aur unka seedha kaam.',
        concept: 'HARDWARE · SYSTEMS',
        glossaryFooter: 'SHORT FORM → FULL FORM → KAAM',
        glossarySections: [{
          title: 'Computer hardware aur systems',
          items: [
            { term: 'BIOS', detail: 'Basic Input/Output System: motherboard firmware jo hardware initialize karke boot process shuru karta hai.' },
            { term: 'CPU', detail: 'Central Processing Unit: instructions chalata aur computer ke aam hisaab aur operations karta hai.' },
            { term: 'GPU', detail: 'Graphics Processing Unit: graphics render karta hai aur parallel calculations ke liye bhi use hota hai.' },
            { term: 'HDD', detail: 'Hard Disk Drive: magnetic platters par data store karne wali storage drive.' },
            { term: 'LCD', detail: 'Liquid Crystal Display: liquid-crystal technology se image dikhane wali screen.' },
            { term: 'LED', detail: 'Light-Emitting Diode: current milne par roshni dene wala semiconductor component.' },
            { term: 'OS', detail: 'Operating System: software jo hardware resources manage karta aur apps chalane ka platform deta hai.' },
            { term: 'PC', detail: 'Personal Computer: aik shakhs ke aam istemaal ke liye bana computer.' },
            { term: 'POST', detail: 'Power-On Self-Test: startup par firmware ke basic hardware checks.' },
            { term: 'PSU', detail: 'Power Supply Unit: computer ke components ko zaroori voltage aur power deti hai.' },
            { term: 'RAM', detail: 'Random Access Memory: chalti hui apps aur data ke liye temporary, aam tor par volatile memory.' },
            { term: 'ROM', detail: 'Read-Only Memory: non-volatile memory ka naam; modern ROM-type memory ko update bhi kiya ja sakta hai.' },
            { term: 'SMPS', detail: 'Switched-Mode Power Supply: switching circuits se voltage convert aur regulate karti hai.' },
            { term: 'SSD', detail: 'Solid-State Drive: flash memory par data store karne wali storage drive; is mein moving platters nahi hote.' },
            { term: 'USB', detail: 'Universal Serial Bus: devices connect karne aur compatible standards ke mutabiq data ya power dene ka standard.' },
            { term: 'UPS', detail: 'Uninterruptible Power Supply: bijli jane par limited waqt ke liye backup power deti hai.' },
            { term: 'VDU', detail: 'Visual Display Unit: monitor ya screen jaisa visual output device.' },
          ],
        }],
      },
      {
        title: 'Software, Media & Business Abbreviations',
        heading: 'Software, media aur business ke short forms',
        definition: 'Development, data, finance aur media mein baar baar dikhne wale abbreviations ko samjhein.',
        concept: 'SOFTWARE · DATA · BUSINESS',
        glossaryFooter: 'SHORT FORM → FULL FORM → KAAM',
        glossarySections: [{
          title: 'Software, data aur business',
          items: [
            { term: 'AI', detail: 'Artificial Intelligence: computer systems ke zariye aise kaam karna jo aam tor par insani intelligence mangte hain.' },
            { term: 'AVI', detail: 'Audio Video Interleave: audio aur video ko aik file mein rakhne wala multimedia container format.' },
            { term: 'CLI', detail: 'Command-Line Interface: text commands ke zariye software ya operating system se kaam karne ka interface.' },
            { term: 'CMD', detail: 'Windows Command Prompt ka aam short name; command-line interpreter chalane ke liye use hota hai.' },
            { term: 'CMS', detail: 'Content Management System: website ya digital content create, edit aur organize karne ka software.' },
            { term: 'CV', detail: 'Curriculum Vitae: job ya academic application ke liye taleem, tajurbe, skills aur relevant achievements ka document. Iski detail aur format mulk aur role ke mutabiq badal sakti hai.' },
            { term: 'DBMS', detail: 'Database Management System: database ko create, query, update aur manage karne wala software.' },
            { term: 'GA4', detail: 'Google Analytics 4: Google Analytics ki event-based analytics property.' },
            { term: 'GUI', detail: 'Graphical User Interface: windows, icons, menus aur buttons ke zariye software use karne ka interface.' },
            { term: 'HLL', detail: 'High-Level Language: aisi programming language jo insani soch ke qareeb syntax deti aur hardware details chhupati hai.' },
            { term: 'ICO (crypto)', detail: 'Initial Coin Offering: crypto project ka tokens offer karke funds jama karne ka tareeqa. Is term ko `.ico` icon-file extension se alag rakha gaya hai.', example: 'project ICO ke zariye tokens offer kar sakta hai; yeh Windows icon file nahi hoti.' },
            { term: 'IDE', detail: 'Integrated Development Environment: code editor ke saath build, run aur debugging tools dene wala app.' },
            { term: 'IPO', detail: 'Initial Public Offering: company ka pehli dafa public investors ko shares offer karna.' },
            { term: 'LLL', detail: 'Low-Level Language: machine instructions ya hardware ke qareeb programming language.' },
            { term: 'ML', detail: 'Machine Learning: AI ka hissa jahan model data se patterns seekh kar predictions ya decisions karta hai.' },
            { term: 'MP3', detail: 'MPEG-1 Audio Layer III: digital audio ko compress karne ka mashhoor lossy format.' },
            { term: 'OMR', detail: 'Optical Mark Recognition: forms par bhare hue bubbles ya marks ko pehchanne ki technology.' },
            { term: 'PR', detail: 'Pull Request: code changes ko review karne aur repository mein merge karne ke liye proposed change.' },
            { term: 'RDBMS', detail: 'Relational Database Management System: tables aur unke relationships ki bunyaad par data manage karta hai.' },
            { term: 'RLS', detail: 'Row-Level Security: database policy jo tay karti hai ke user kaunsi rows dekh ya badal sakta hai.' },
            { term: 'SaaS', detail: 'Software as a Service: provider ke hosted software ko internet par use karna; billing subscription ya usage-based ho sakti hai.' },
            { term: 'SDK', detail: 'Software Development Kit: kisi platform ya service ke liye app banane ke tools, libraries aur documentation.' },
            { term: 'SQL', detail: 'Structured Query Language: relational database mein data query aur manage karne ki language.' },
            { term: 'UI', detail: 'User Interface: screen par woh controls aur content jin se user software ke saath interact karta hai.' },
            { term: 'UX', detail: 'User Experience: product use karte waqt user ka overall tajurba, asaani aur satisfaction.' },
          ],
        }],
      },
      {
        title: 'Web & Network Abbreviations',
        heading: 'Web aur networking ke short forms',
        definition: 'Web pages, browser, data exchange aur networks ke liye istemaal hone wale common abbreviations.',
        concept: 'WEB · NETWORKS',
        glossaryFooter: 'SHORT FORM → FULL FORM → KAAM',
        glossarySections: [{
          title: 'Web, internet aur networking',
          items: [
            { term: 'API', detail: 'Application Programming Interface: software ke hisson ko aik doosre se interact karne ka agreed interface.' },
            { term: 'CDN', detail: 'Content Delivery Network: distributed servers ka network jo images, scripts aur doosre web assets ko users ke qareeb se serve kar sakta hai.' },
            { term: 'CSS', detail: 'Cascading Style Sheets: web page ke rang, layout aur visual style define karne ki language.' },
            { term: 'DNS', detail: 'Domain Name System: domain name, jaise example.com, ko IP address se map karta hai.' },
            { term: 'DOM', detail: 'Document Object Model: HTML document ki tree representation aur usay read ya update karne wali interface.' },
            { term: 'GPRS', detail: 'General Packet Radio Service: GSM mobile networks par packet-based data service, aam tor par 2G se mansub.' },
            { term: 'HTML', detail: 'HyperText Markup Language: web page ke content aur structure ko mark up karne ki language.' },
            { term: 'HTTP', detail: 'Hypertext Transfer Protocol: browser aur server ke darmiyan web requests aur responses ka protocol.' },
            { term: 'HTTPS', detail: 'HTTP Secure: TLS encryption ke zariye HTTP connection ko protect karta hai.' },
            { term: 'IP', detail: 'Internet Protocol: network par packets address aur route karne ke rules ka set.' },
            { term: 'ISP', detail: 'Internet Service Provider: company ya idara jo internet connection deta hai.' },
            { term: 'JSON', detail: 'JavaScript Object Notation: structured data exchange ka text format; JSON khud API nahi hota.' },
            { term: 'LAN', detail: 'Local Area Network: ghar, school ya office jaisi chhoti jagah ka network.' },
            { term: 'MAC', detail: 'Media Access Control: network interface ka link-layer address; local network par device interface ko identify karta hai.' },
            { term: 'MAN', detail: 'Metropolitan Area Network: aik shehar ya metropolitan area mein networks ko jorne wala network.' },
            { term: 'PAN', detail: 'Personal Area Network: aik shakhs ke qareeb personal devices ka network, jaise Bluetooth connection.' },
            { term: 'TCP', detail: 'Transmission Control Protocol: reliable, ordered data delivery ke liye transport protocol.' },
            { term: 'TLD', detail: 'Top-Level Domain: domain name ka aakhri hissa, jaise `.com` ya `.dev`.', example: '`example.dev` mein `.dev` TLD hai.' },
            { term: 'UDP', detail: 'User Datagram Protocol: connectionless transport protocol; delivery ya order ki guarantee nahi deta.' },
            { term: 'URI', detail: 'Uniform Resource Identifier: resource ko identify karne wali string; URL URI ki aik qisam hai.' },
            { term: 'URL', detail: 'Uniform Resource Locator: web ya network resource ka address aur us tak pohanchne ka tareeqa.' },
            { term: 'VPN', detail: 'Virtual Private Network: public network par encrypted tunnel ke zariye private network access ya traffic protection deta hai.' },
            { term: 'WAN', detail: 'Wide Area Network: bari geographic distance par networks ko jorne wala network.' },
            { term: 'WWW', detail: 'World Wide Web: internet par linked pages aur resources ka system, jo web protocols se access hota hai.' },
          ],
        }],
      },
      {
        title: 'Programming & Security Abbreviations',
        heading: 'Programming aur security ke mazeed short forms',
        definition: 'Development aur security ke useful terms, sahi full forms aur mukhtasar context ke saath.',
        concept: 'CODE · SECURITY',
        glossaryFooter: 'SHORT FORM → FULL FORM → CONTEXT',
        glossarySections: [{
          title: 'Code, web development aur security',
          items: [
            { term: '2FA', detail: 'Two-Factor Authentication: login ke liye password ke saath aik doosra saboot, jaise authenticator code.' },
            { term: 'ABAC', detail: 'Attribute-Based Access Control: user, resource aur request ke attributes dekh kar access ka faisla karne ka model.' },
            { term: 'AJAX', detail: 'Asynchronous JavaScript and XML: page reload kiye baghair server se data lena ya bhejna; aaj kal JSON bhi aam hai.' },
            { term: 'ASI', detail: 'Automatic Semicolon Insertion: JavaScript parser kuch jagahon par semicolon khud insert karta hai.' },
            { term: 'CJS', detail: 'CommonJS: JavaScript modules ka format jo aksar Node.js mein `require()` aur `module.exports` use karta hai.' },
            { term: 'CORS', detail: 'Cross-Origin Resource Sharing: browser aur server ke darmiyan mukhtalif origins se request ki ijazat dene wala mechanism.' },
            { term: 'CRLF', detail: 'Carriage Return + Line Feed: Windows text files mein line khatam karne ke liye aam tor par istemaal hone wale do characters.' },
            { term: 'CRUD', detail: 'Create, Read, Update, Delete: data ko banane, parhne, badalne aur mitane ke bunyadi operations.' },
            { term: 'DRY', detail: 'Don’t Repeat Yourself: aik hi knowledge ya logic ko bila-zaroorat kai jagah duplicate na karna.' },
            { term: 'ES Modules', detail: 'ECMAScript Modules: JavaScript ka standard module system, jo `import` aur `export` use karta hai.' },
            { term: 'FIFO', detail: 'First In, First Out: queue ka rule jahan sab se pehle aane wala item sab se pehle nikalta hai.' },
            { term: 'IIFE', detail: 'Immediately Invoked Function Expression: function expression jo define hote hi foran chal jata hai.' },
            { term: 'ISR', detail: 'Incremental Static Regeneration: Next.js Pages Router ka feature jo static page ko deploy ke baad dobara generate kar sakta hai.' },
            { term: 'JWT', detail: 'JSON Web Token: claims ko JSON format mein represent karne wala token format, jo aksar digitally signed hota hai.' },
            { term: 'LIFO', detail: 'Last In, First Out: stack ka rule jahan sab se aakhir mein rakha gaya item sab se pehle nikalta hai.' },
            { term: 'OAuth', detail: 'OAuth 2.0 aik authorization framework hai jo app ko user ki ijazat se limited access deta hai; yeh khud login protocol nahi.' },
            { term: 'PAT', detail: 'Personal Access Token: account ya service ke liye banaya gaya token jo scripts aur tools ko limited access de sakta hai.' },
            { term: 'PHP', detail: 'PHP: Hypertext Preprocessor: server-side web development mein istemaal hone wali programming language; yeh recursive acronym hai.' },
            { term: 'PWA', detail: 'Progressive Web App: web app jo browser APIs se app jaisa installable aur offline-capable tajurba de sakti hai.' },
            { term: 'REST', detail: 'Representational State Transfer: web services design karne ke architectural constraints ka set.' },
            { term: 'SSG', detail: 'Static Site Generation: pages ko build ke waqt HTML mein render karna, phir tayyar files serve karna.' },
            { term: 'SSR', detail: 'Server-Side Rendering: request ke waqt server par page ka HTML render karna.' },
            { term: 'VCS', detail: 'Version Control System: files ki tabdeeliyan record aur versions ko manage karne wala system, jaise Git.' },
            { term: 'XSS', detail: 'Cross-Site Scripting: web security flaw jahan attacker ka script doosre users ke browser mein chal sakta hai.' },
            { term: 'XAMPP', detail: 'Cross-platform development stack ka naam. Is mein Apache aur PHP shamil hain; database component version ke mutabiq MySQL ya MariaDB ho sakta hai.' },
            { term: 'XHTML', detail: 'Extensible HyperText Markup Language: HTML ko XML ke zyada sakht syntax rules ke saath likhne wala markup format.' },
            { term: 'XML', detail: 'Extensible Markup Language: structured data ko tags ke zariye represent karne ka markup format.' },
            { term: 'Yarn', detail: 'JavaScript packages manage karne wala package manager; naam “Yet Another Resource Negotiator” se aaya hai.' },
          ],
        }],
      },
      {
        title: 'Devices, Media & Connectivity',
        heading: 'Devices, media aur connectivity ke short forms',
        definition: 'Hardware, file formats aur mobile networks mein aam abbreviations ko examples ke saath dekhein.',
        concept: 'DEVICES · MEDIA · NETWORKS',
        glossaryFooter: 'SHORT FORM → FULL FORM → CONTEXT',
        glossarySections: [{
          title: 'Hardware, formats aur mobile networks',
          items: [
            { term: 'AAC', detail: 'Advanced Audio Coding: digital audio ka lossy compression format.' },
            { term: 'AMR', detail: 'Adaptive Multi-Rate: speech audio ke liye banaya gaya audio codec.' },
            { term: 'APNG', detail: 'Animated Portable Network Graphics: PNG format ki extension jo animation support karti hai.' },
            { term: 'AT&T', detail: 'American Telephone and Telegraph: American telecommunications company ka naam.' },
            { term: 'ATM', detail: 'Automated Teller Machine: bank card se cash nikalne aur kuch banking kaam karne wali machine.' },
            { term: 'AVIF', detail: 'AV1 Image File Format: AV1 video codec par mabni modern image format.' },
            { term: 'CD', detail: 'Compact Disc: optical disc jis par digital audio ya data store kiya ja sakta hai.' },
            { term: 'CDMA', detail: 'Code Division Multiple Access: radio communication mein users ko mukhtalif codes se alag karne ki technique.' },
            { term: 'DRAM', detail: 'Dynamic Random-Access Memory: RAM ki qisam jise data barqarar rakhne ke liye refresh karna hota hai.' },
            { term: 'DVD', detail: 'Digital Versatile Disc: optical storage disc; “Digital Video Disc” bhi pehle istemaal hota tha.' },
            { term: 'EEPROM', detail: 'Electrically Erasable Programmable Read-Only Memory: aisi non-volatile memory jise bijli se erase aur dobara program kiya ja sakta hai.' },
            { term: 'EPROM', detail: 'Erasable Programmable Read-Only Memory: chip memory jise ultraviolet light se erase karke dobara program kiya ja sakta hai.' },
            { term: 'FDD', detail: 'Floppy Disk Drive: floppy disk par data read aur write karne wali drive.' },
            { term: 'FTP', detail: 'File Transfer Protocol: network par files transfer karne ka protocol.' },
            { term: 'GIF', detail: 'Graphics Interchange Format: indexed-color image format jo simple animation bhi rakh sakta hai.' },
            { term: 'GPS', detail: 'Global Positioning System: satellites ki madad se location aur waqt ka andaza dene wala navigation system.' },
            { term: 'GSM', detail: 'Global System for Mobile Communications: 2G cellular networks ka mashhoor standard.' },
            { term: 'HDMI', detail: 'High-Definition Multimedia Interface: digital video aur audio bhejne ka interface.' },
            { term: 'IC', detail: 'Integrated Circuit: aik chhoti semiconductor chip par banaya gaya electronic circuit.' },
            { term: 'JAR', detail: 'Java Archive: Java classes aur resources ko aik archive file mein jama karne ka format.' },
            { term: 'JPEG', detail: 'Joint Photographic Experts Group: committee ka naam aur us ke banaye image compression standards ke liye aam naam.' },
            { term: 'Kbps', detail: 'Kilobits per second: data rate ki unit; telecom usage mein 1 kbps aam tor par 1,000 bits per second hota hai.' },
            { term: 'Mbps', detail: 'Megabits per second: data rate ki unit; MB/s se alag hai kyun ke bit aur byte mukhtalif hain.' },
            { term: 'NVMe', detail: 'Non-Volatile Memory Express: PCI Express par flash storage ke liye banaya gaya storage protocol.' },
            { term: 'PDF', detail: 'Portable Document Format: documents ko mukhtalif devices par milte-julte layout mein dikhane ka format.' },
            { term: 'PNG', detail: 'Portable Network Graphics: lossless raster image format jo transparency ko support karta hai.' },
            { term: 'PIN', detail: 'Personal Identification Number: identity verify karne ke liye istemaal hone wala numeric code.' },
            { term: 'PROM', detail: 'Programmable Read-Only Memory: non-volatile memory jise aam tor par aik martaba program kiya jata hai.' },
            { term: 'SIM', detail: 'Subscriber Identity Module: mobile subscription aur network identity se mutaliq credentials rakhne wala module.' },
            { term: 'SMS', detail: 'Short Message Service: cellular network par text messages bhejne ka service.' },
            { term: 'UMTS', detail: 'Universal Mobile Telecommunications System: 3G mobile communication standards ka aik system.' },
            { term: 'VGA', detail: 'Video Graphics Array: IBM ka display standard; VGA connector naam bhi isi se mashhoor hua.' },
            { term: 'VRAM', detail: 'Video Random-Access Memory: graphics processor ke liye istemaal hone wali memory.' },
            { term: 'VRM', detail: 'Voltage Regulator Module: motherboard ya graphics card par processor ko munasib voltage dene wala circuit.' },
            { term: '3G', detail: 'Third Generation: mobile network technology ki teesri nasal.' },
            { term: '3GPP', detail: '3rd Generation Partnership Project: telecommunications standards tayyar karne wali standards organization.' },
            { term: '3GP', detail: '3GPP se mutaliq multimedia container format; iska official full form “3rd Generation Project” nahi.' },
          ],
        }, {
          title: 'Image, audio aur file format labels',
          items: [
            { term: 'BAT', detail: 'Windows batch file extension; batch file commands ka group chala sakti hai.', example: '`build.bat` command prompt par project ke build commands chala sakti hai.' },
            { term: 'CUR', detail: 'Windows cursor image extension. Aapke note mein `.cur` ko ICO ke saath list kiya tha; cursor file format ka naam expansion nahi.', example: '`pointer.cur` mouse pointer ke custom image ko store kar sakti hai.' },
            { term: 'DOC', detail: 'Word document ki legacy extension; “document” aam label hai, lekin `.doc` ka koi universal acronym expansion nahi.', example: 'purana Word file `letter.doc` ke naam se ho sakta hai.' },
            { term: 'DOCX', detail: 'Office Open XML Word document format. Aapke note mein “office open XML document” tha; yeh sahi expansion ke qareeb hai.', example: '`resume.docx` editable Word-compatible document hota hai.' },
            { term: 'EXE', detail: 'Executable file extension, Windows programs ke liye; yeh standard acronym expansion nahi.', example: '`setup.exe` installer launch kar sakta hai.' },
            { term: 'ICO (icon file)', detail: 'Windows icon file format/extension. Aapke note mein “Microsoft Icon” likha tha; `.ico` ka standard expanded acronym nahi, yeh icon format ka extension hai.', example: 'website browser tab ke liye `favicon.ico` serve kar sakti hai.' },
            { term: 'INI', detail: 'Initialization file: configuration settings rakhne wali file extension.', example: '`app.ini` mein server port ki setting ho sakti hai.' },
            { term: 'MD', detail: 'Aapke note mein “Markdown / make directory” likha tha. File extension `.md` aam tor par Markdown document hai; directory banane ke liye `mkdir` command hota hai.', example: '`README.md` mein headings aur code blocks likho.' },
            { term: 'MIDI', detail: 'Musical Instrument Digital Interface: instruments aur music software ke darmiyan performance instructions ka standard.', example: 'MIDI keyboard ke notes ko DAW mein record karke piano sound se play karo.' },
            { term: 'MKV', detail: 'Matroska Video: Matroska multimedia container ki aam extension.', example: '`film.mkv` mein video ke saath multiple subtitle tracks ho sakte hain.' },
            { term: 'MP4', detail: 'MPEG-4 Part 14: audio, video aur metadata rakhne wala multimedia container.', example: 'phone video `clip.mp4` mein save ho sakti hai.' },
            { term: 'MPEG', detail: 'Moving Picture Experts Group: audio/video standards banane wali group ka naam.', example: 'MPEG-4 Part 14 ko aam tor par MP4 kaha jata hai.' },
            { term: 'OGG / OOG', detail: 'Ogg container format ka naam OGG hai; aapke note ka `.oog` likely typo hai. Ogg khud acronym expansion nahi.', example: '`.ogg` audio file ko Ogg-compatible player mein kholo.' },
            { term: 'RAR', detail: 'Roshal Archive: compressed archive format ka naam.', example: '`backup.rar` ko archive utility se extract karo.' },
            { term: 'SVG', detail: 'Scalable Vector Graphics: scalable vector image format.', example: '`logo.svg` ko bara karne par bhi edges sharp rehte hain.' },
            { term: 'TXT', detail: 'Plain-text file extension; `.txt` aam tor par text file ko indicate karta hai.', example: '`notes.txt` ko simple text editor mein kholo.' },
            { term: 'WAV', detail: 'Waveform Audio File Format: audio file format, aksar uncompressed PCM audio ke liye.', example: 'studio recording `take.wav` mein save karo.' },
            { term: 'WMA', detail: 'Windows Media Audio: Microsoft se mutaliq audio codec/format.', example: '`voice.wma` ko WMA-compatible player mein chalao.' },
            { term: 'XLSX', detail: 'Office Open XML spreadsheet format. Aapke note mein sirf extension tha.', example: '`budget.xlsx` workbook mein monthly expenses rakho.' },
            { term: 'ZIP archive', detail: 'Compressed archive format. Aapke note ka “Zone Improvement Plan” postal ZIP Code ka expansion hai, ZIP file ka nahi.', example: '`project.zip` mein project ki multiple files jama ho sakti hain.' },
          ],
        }],
      },
      {
        title: 'Everyday Terms & Reference',
        heading: 'Rozmarrah short forms aur chhoti reference list',
        definition: 'Chat, organizations aur technical reference ke common short forms. Ghalat mashhoor expansions ko bhi alag se clear kiya gaya hai.',
        concept: 'EVERYDAY · REFERENCE',
        glossaryFooter: 'SHORT FORM → MEANING → NOTE',
        glossarySections: [
          {
            title: 'Chat, organizations aur aam istemaal',
            items: [
              { term: 'AKA', detail: 'Also Known As: kisi shakhs ya cheez ke doosre naam se pehchane jane par.' },
              { term: 'BBC', detail: 'British Broadcasting Corporation: United Kingdom ka public service broadcaster.' },
              { term: 'BMW', detail: 'Bayerische Motoren Werke: German vehicle company ka naam.' },
              { term: 'BRB', detail: 'Be Right Back: chat mein batane ke liye ke aap jald wapas aayenge.' },
              { term: 'BTW', detail: 'By The Way: guftagu mein aik extra baat shuru karne ke liye.' },
              { term: 'DIY', detail: 'Do It Yourself: kisi kaam ko khud karna, bajaye tayyar service lene ke.' },
              { term: 'FAQ', detail: 'Frequently Asked Questions: baar baar pooche jane wale sawalat aur unke jawab.' },
              { term: 'FYI', detail: 'For Your Information: maloomat dene ke liye; zaroori nahi ke jawab darkar ho.' },
              { term: 'GMT', detail: 'Greenwich Mean Time: Greenwich se mansub time standard; UTC iska modern atomic time standard hai.' },
              { term: 'IBM', detail: 'International Business Machines: technology company ka naam.' },
              { term: 'IDC', detail: 'I Don’t Care: chat mein be-parwahi ya faisle se dilchaspi na hone ka izhar.' },
              { term: 'IDK', detail: 'I Don’t Know: “mujhe nahi maloom” ka short form.' },
              { term: 'IG', detail: 'Instagram ke liye aam short form; chat mein context ke mutabiq “I guess” bhi ho sakta hai.' },
              { term: 'IQ', detail: 'Intelligence Quotient: standardized test score jo kuch cognitive abilities ko compare karta hai; yeh poori intelligence ka paimana nahi.' },
              { term: 'IRL', detail: 'In Real Life: online ke bajaye rozmarrah ya physical duniya mein.' },
              { term: 'JK', detail: 'Just Kidding: batane ke liye ke baat mazaq mein kahi gayi thi.' },
              { term: 'LASER', detail: 'Light Amplification by Stimulated Emission of Radiation: focused light banane wali technology.' },
              { term: 'LMK', detail: 'Let Me Know: “mujhe bata dena” ka short form.' },
              { term: 'LOL', detail: 'Laughing Out Loud: chat mein hansi ya mazaq ka reaction.' },
              { term: 'LPA', detail: 'Lakh Per Annum: South Asia mein salary batane ka aam tareeqa, yani saal bhar mein lakh rupay.' },
              { term: 'LPA', detail: 'Lasting Power of Attorney: UK ka legal document jahan koi shakhs mustaqbil mein faisle karne ke liye attorney muqarrar karta hai.' },
              { term: 'LTS', detail: 'Long-Term Support: software version jise aam releases se zyada arsay tak updates milte hain.' },
              { term: 'MIPS', detail: 'Million Instructions Per Second: processor performance ka aik purana metric; mukhtalif architectures ko seedha compare karna mushkil hai.' },
              { term: 'NFT', detail: 'Non-Fungible Token: blockchain par unique token; token ki ownership ka matlab zaroori nahi ke underlying art ke copyright ki ownership bhi ho.' },
              { term: 'NSA', detail: 'National Security Agency: United States ka intelligence aur cybersecurity idara.' },
              { term: 'OCD', detail: 'Obsessive-Compulsive Disorder: mental health condition jismein obsessions aur/ya compulsions hoti hain.' },
              { term: 'POV', detail: 'Point of View: kisi shakhs ka nazariya ya kahani dikhane ka perspective.' },
              { term: 'RIP', detail: 'Rest in Peace: wafat shuda shakhs ke liye izzat aur afsos ka jumla.' },
              { term: 'RTS', detail: 'Real-Time Strategy: strategy video game genre jahan players aik hi waqt mein units aur resources manage karte hain.' },
              { term: 'SMH', detail: 'Shaking My Head: na-pasand, hairani ya mayoosi ka chat reaction.' },
              { term: 'SOS', detail: 'Morse code mein distress signal, jo `... --- ...` hota hai. “Save Our Souls/Ship” iski asal official expansion nahi.' },
              { term: 'TBD', detail: 'To Be Determined: jis baat ka faisla baad mein hona ho.' },
              { term: 'TBH', detail: 'To Be Honest: “sach kahun to” ke maani mein.' },
              { term: 'UNICEF', detail: 'Aaj ka official naam United Nations Children’s Fund hai. Purane naam “United Nations International Children’s Emergency Fund” se acronym barqarar raha.' },
              { term: 'UTC', detail: 'Coordinated Universal Time: duniya bhar ke clocks aur time zones ke liye bunyadi time standard.' },
              { term: 'VIP', detail: 'Very Important Person: khaas ahmiyat ya protocol rakhne wala shakhs.' },
              { term: 'W3C', detail: 'World Wide Web Consortium: web ke standards aur guidelines tayyar karne wali organization.' },
              { term: 'WRT', detail: 'With Respect To: “ke hawale se” ya “ke mutaliq”.' },
              { term: 'ZIP code', detail: 'United States ka postal code; ZIP ka full form Zone Improvement Plan hai.' },
            ],
          },
          {
            title: 'Naam, terms aur ghalat mashhoor full forms',
            items: [
              { term: 'Bun', detail: 'JavaScript runtime aur toolkit ka proper name hai; “all-in-one” uski description hai, full form nahi.' },
              { term: 'CRON', detail: 'Unix-like systems mein scheduled jobs chalane ka tareeqa/daemon. Is naam ko Greek “Chronos” se jorna mashhoor tashreeh hai, lekin yeh standard acronym expansion nahi.' },
              { term: 'HEAD', detail: 'Git mein current checkout ko point karne wala reference; aksar current branch ya commit ki taraf ishara karta hai. Yeh full-form acronym nahi.' },
              { term: 'ISO', detail: 'International Organization for Standardization ka short naam. “ISO” mukhtalif languages mein naam ke liye aik hi form hai; yeh English initials ka seedha acronym nahi.' },
              { term: 'Wi-Fi', detail: 'Wireless networking technology ka brand name; “Wireless Fidelity” official full form nahi.' },
              { term: 'SQL keywords', detail: 'ALTER, CREATE, DELETE, SELECT, UPDATE, DROP, EXISTS, USING, WITH CHECK, PERMISSIVE aur RESTRICTIVE SQL ke keywords ya clauses hain, abbreviations nahi.' },
              { term: 'YAHOO!', detail: 'Internet company ka naam; is ke liye “Yet Another Hierarchical Officious Oracle” aik baad mein diya gaya backronym hai, naam ki asal expansion nahi.' },
              { term: 'Virus', detail: 'Computer virus malware ki aik qisam hai. “Vital Information Resource Under Seized” iska asal full form nahi, sirf ghalat backronym hai.' },
            ],
          },
          {
            title: 'Operators aur digital data units',
            items: [
              { term: 'LAST-ACT-B', detail: 'Programming operators yaad rakhne ki mnemonic: Logical, Arithmetic, String, Typeof, Assignment, Comparison, Ternary, Bitwise. Language ke mutabiq operator precedence alag ho sakti hai.' },
              { term: 'Bit aur byte', detail: '8 bits = 1 byte. 4 bits ke group ko aam tor par nibble kehte hain.' },
              { term: 'KB aur KiB', detail: '1 KB = 1,000 bytes (decimal). 1 KiB = 1,024 bytes (binary). Isi tarah MiB, GiB waghera binary units hain.' },
              { term: 'Binary size conversions', detail: '1 KiB = 1,024 bytes; 1 MiB = 1,024 KiB; 1 GiB = 1,024 MiB; phir isi tarah TiB, PiB, EiB, ZiB aur YiB.' },
            ],
          },
          {
            title: 'Safar aur currency ke short labels',
            items: [
              { term: 'LHR', detail: 'London Heathrow Airport ka IATA airport code. Aap apni list mein Lahore ke liye “LHR” use karte ho; Lahore ke Allama Iqbal International Airport ka code `LHE` hai, is liye travel booking mein `LHE` likhna sahi rahega.', example: 'Misal: Lahore se flight dhoondte hue departure code LHE use karo; Heathrow ke liye LHR.' },
              { term: 'LHE', detail: 'Allama Iqbal International Airport, Lahore ka IATA airport code.', example: 'Misal: Lahore flight itinerary par destination airport `LHE` ho sakta hai.' },
              { term: 'PKR', detail: 'Pakistani rupee ka ISO 4217 currency code.', example: 'Misal: price ko `PKR 2,000` likhne se currency wazeh rehti hai.' },
              { term: 'Rs.', detail: 'Rupees ke liye aam istemaal hone wala mukhtasar label; mukhtalif mulkon mein currency batane ke liye code (jaise PKR) zyada clear hota hai.', example: 'Misal: Pakistan ki list mein `Rs. 2,000` ka matlab 2,000 Pakistani rupees hai.' },
            ],
          },
        ],
      },
      {
        title: 'Security, Data & Platform Abbreviations',
        heading: 'Definitions lessons ke mazeed short forms',
        definition: 'Definitions ke networking, security, database, analytics aur platform lessons mein istemaal hue abbreviations yahan jama hain.',
        concept: 'SECURITY · DATA · PLATFORMS',
        glossaryFooter: 'SHORT FORM → FULL FORM → LESSON CONTEXT',
        glossarySections: [
          {
            title: 'Software, databases aur analytics',
            items: [
              { term: 'AOSP', detail: 'Android Open Source Project: Android platform ka open-source project.' },
              { term: 'CTA', detail: 'Call to Action: button ya link jo user ko agla qadam lene ki dawat de, jaise “Sign up”.' },
              { term: 'DAC', detail: 'Discretionary Access Control: access model jahan resource ka owner tay karta hai ke kis user ko permission mile.' },
              { term: 'GIN', detail: 'Generalized Inverted Index: PostgreSQL index type jo JSONB, arrays aur multi-value search ko support karta hai.' },
              { term: 'ID', detail: 'Identifier: kisi user, record ya object ko pehchanne wala naam ya value.' },
              { term: 'JS', detail: 'JavaScript ka aam short form.' },
              { term: 'JSONB', detail: 'PostgreSQL ka JSON data type jo JSON ko decomposed binary form mein store karta hai aur indexing/query options deta hai.' },
              { term: 'JSX', detail: 'JavaScript XML: JavaScript mein UI jaisi markup likhne ki syntax extension, jo aksar React ke saath use hoti hai.' },
              { term: 'LLM', detail: 'Large Language Model: bohat se text data par trained model jo text samajhne aur generate karne ke kaam aata hai.' },
              { term: 'NASA', detail: 'National Aeronautics and Space Administration: United States ka civil space program aur aeronautics research agency.' },
              { term: 'NLU', detail: 'Natural Language Understanding: natural-language systems ka hissa jo user ke lafzon se intent ya entities samajhne ki koshish karta hai.' },
              { term: 'ROAS', detail: 'Return on Ad Spend: advertising par kharch ke muqable mein attributed revenue; yeh profit margin nahi hota.' },
            ],
          },
          {
            title: 'Security, networking aur platform',
            items: [
              { term: 'DOS', detail: 'Disk Operating System: disk aur files manage karne wala operating system; MS-DOS is naam ka Microsoft version tha.' },
              { term: 'DPI', detail: 'Deep Packet Inspection: network traffic ke packet headers ke saath payload ko inspect karne ki technique; encrypted TLS payload ko dekhne ke liye alag TLS inspection chahiye.' },
              { term: 'HOF', detail: 'Is project ke “HOF Pack” naam ka project-specific short label. Is context mein iska koi universal official full form nahi diya gaya.' },
              { term: 'HR', detail: 'Human Resources: organization ka woh function jo hiring, employee support aur workplace policies sambhalta hai.' },
              { term: 'IVR', detail: 'Interactive Voice Response: phone system jo recorded prompts aur keypad ya voice input se callers ko guide karta hai.' },
              { term: 'MS-DOS', detail: 'Microsoft Disk Operating System: Microsoft ka command-line disk operating system, jis ke upar pehle Windows versions chalte thay.' },
              { term: 'NAT', detail: 'Network Address Translation: router/gateway par IP addresses ko translate karne ki technique, aksar private network devices ko public address ke zariye internet access dene ke liye.' },
              { term: 'NT', detail: 'Windows NT product family ke naam mein “New Technology” se mansub initials; Windows XP isi NT family par mabni tha.' },
              { term: 'QUIC', detail: 'Modern transport protocol. Naam historically “Quick UDP Internet Connections” se aaya; aaj QUIC protocol ka proper naam hai, UDP ka synonym nahi.' },
              { term: 'SOCKS', detail: 'Network proxy protocol family ka naam, aam tor par “Socket Secure” kaha jata hai. SOCKS proxy apps ki TCP aur kuch versions mein UDP traffic relay kar sakta hai.' },
              { term: 'SSL', detail: 'Secure Sockets Layer: TLS se pehle istemaal hone wala secure-connection protocol. SSL ke tamam versions obsolete hain; modern HTTPS TLS use karta hai.' },
              { term: 'TLS', detail: 'Transport Layer Security: network par do endpoints ke darmiyan encrypted aur authenticated connection banane ka protocol.' },
              { term: 'TPM', detail: 'Trusted Platform Module: cryptographic keys aur platform integrity features ke liye security component.' },
              { term: 'UEFI', detail: 'Unified Extensible Firmware Interface: modern PCs ke firmware aur operating-system boot ke darmiyan standard interface.' },
              { term: 'Windows Me', detail: 'Windows Millennium Edition ka product name. “Me” Millennium Edition ko represent karta hai.' },
              { term: 'Windows XP', detail: 'Windows XP ke “XP” ko “eXPerience” se jora gaya tha; yeh product name hai, technical protocol ka acronym nahi.' },
            ],
          },
        ],
      },
      {
        title: 'Architecture, AI & Networking Abbreviations',
        heading: 'Web architecture, AI aur networking ke short forms',
        definition: 'Pasted notes se chunay gaye useful technical abbreviations—correct full forms aur practical examples ke saath.',
        concept: 'ARCHITECTURE · AI · NETWORKS',
        glossaryFooter: 'SHORT FORM → FULL FORM → EXAMPLE',
        glossarySections: [
          {
            title: 'Networking aur device memory',
            items: [
              { term: 'CSMA', detail: 'Carrier Sense Multiple Access: network devices transmit karne se pehle shared channel ko check karte hain; CSMA/CA Wi-Fi mein collision se bachne ki koshish karta hai.' },
              { term: 'LPDDR', detail: 'Low-Power Double Data Rate: mobile devices ke liye kam power use karne wali SDRAM family.' },
            ],
          },
          {
            title: 'International telephone numbering',
            items: [
              { term: 'E.164', detail: 'ITU-T ki international public telephone numbering recommendation. Geographic country calling codes one, two ya three digits ke ho sakte hain.' },
              { term: 'ITU', detail: 'International Telecommunication Union: United Nations ki specialized agency jo telecommunications standards aur international coordination par kaam karti hai.' },
              { term: 'NANP', detail: 'North American Numbering Plan: +1 country code ke andar United States, Canada aur Caribbean ke participating countries/territories ka shared telephone numbering plan.' },
              { term: 'NANPA', detail: 'North American Numbering Plan Administrator: NANP numbering resources ki neutral administration karne wala idara.' },
              { term: 'ITU-T', detail: 'International Telecommunication Union Telecommunication Standardization Sector: ITU ka sector jo telecommunications ke international standards aur recommendations banata hai.' },
            ],
          },
          {
            title: 'Software interfaces aur configuration',
            items: [
              { term: 'IDL', detail: 'Interface Description Language: language-neutral tareeqa jo software components ya services ke interface aur unke data/operations ko describe karta hai.' },
              { term: 'SCI', detail: 'Software Configuration Item: configuration management ke tehat pehchana aur track kiya jane wala software artifact, jaise source file, build script ya release document.' },
              { term: 'WASM', detail: 'WebAssembly (Wasm): portable binary instruction format aur compilation target, jise compatible runtimes web ya doosre environments mein chala sakte hain.' },
            ],
          },
          {
            title: 'Web, architecture aur AI',
            items: [
              { term: 'CAPTCHA', detail: 'Completely Automated Public Turing test to tell Computers and Humans Apart: website par automated abuse kam karne ke liye challenge.' },
              { term: 'MVC', detail: 'Model-View-Controller: software ko data/model, display/view aur request/controller responsibilities mein organize karne ka pattern.' },
              { term: 'SERP', detail: 'Search Engine Results Page: search engine par query bhejne ke baad dikhne wale results ka page. “Search Engine Research Pages” sahi expansion nahi.' },
              { term: 'VLM', detail: 'Vision-Language Model: image ya video jaisi visual input aur text dono ko process karne wala AI model.' },
            ],
          },
          {
            title: 'Character encoding',
            items: [
              { term: 'UTF-16', detail: 'Unicode Transformation Format – 16-bit: Unicode text ko 16-bit code units mein encode karta hai; kuch characters do code units lete hain.' },
            ],
          },
        ],
      },
      {
        title: 'Everyday & Conversation Abbreviations',
        heading: 'Rozmarrah guftagu ka short form',
        definition: 'Communication notes mein mila short form aur uska context.',
        concept: 'CONVERSATION · SHORT FORM',
        glossarySections: [{ title: 'Chat shorthand', items: [
          { term: 'GF', detail: 'Girlfriend: informal English chat abbreviation. Yeh har relationship ke liye label nahi; shakhs ka apna pasandeeda term use karo.', example: 'Misal: “My GF is joining us” ka matlab “Meri girlfriend hamare saath aa rahi hai” hai.' },
        ] }],
      },
    ],
  },
  links: {
    name: 'Links',
    chapters: linkGroups.map((section) => ({
      title: section.title,
      heading: section.title,
      definition: 'Project chats aur pasted notes se share hue links. Har link ke saath uska use aur aik misaal di gayi hai.',
      concept: 'LINKS · PURPOSE · EXAMPLE',
      glossaryFooter: `${section.items.length} LINKS · USER-SHARED RESOURCE REGISTER`,
      glossarySections: [section],
    })),
  },
  types: {
    name: 'Types',
    chapters: [
      {
        title: 'Shoes',
        heading: 'Shoes ki aam qismein',
        definition: 'Jootay comfort, activity aur occasion ke mutabiq chune jate hain. Har style ka sole, fit aur support alag ho sakta hai.',
        concept: 'SHOES · STYLE · USE',
        apparelTypes: [
          { name: 'Black lassesless (lace-less)', detail: 'Aapka original label “Black lassesless”; mumkin sahi spelling “black lace-less” hai. Exact shoe style ko photo se confirm karein.', example: 'black lace-less shoes ko formal trousers ke saath pehnne se pehle fit aur slip-on design check karo.' },
          { name: 'Blue sports', detail: 'Aapki list ka blue sports-shoe option.', example: 'blue sports shoes ko walk ya workout ke waqt comfortable socks ke saath pehno.' },
          { name: 'Black sports', detail: 'Aapki list ka black sports-shoe option.', example: 'black sports shoes ko gym mein pehnne se pehle sole ki grip check karo.' },
          { name: 'Brown Balochi', detail: 'Aapki list ka brown Balochi-style shoe label; design ki exact details note mein nahi thin.', example: 'brown Balochi shoes ko traditional kapron ke saath pehn kar outfit match dekho.' },
          { name: 'Sneakers', detail: 'Rozmarra casual wear ke liye flexible sole wale shoes.', example: 'Jeans aur plain T-shirt ke saath white sneakers pehne ja sakte hain.' },
          { name: 'Running shoes', detail: 'Daurne ke liye banaye gaye shoes jin mein cushioning aur grip hoti hai.', example: 'Jogging se pehle running shoes pehno taa-ke qadam ko support mile.' },
          { name: 'Formal shoes', detail: 'Office, ceremony ya formal dress ke saath pehne jane wale polished shoes.', example: 'Black leather shoes suit ke saath formal event mein pehne ja sakte hain.' },
          { name: 'Boots', detail: 'Ankle ya us se upar tak cover karne wale mazboot shoes.', example: 'Hiking boots uneven trail par paon ko cover aur grip dete hain.' },
          { name: 'Sandals', detail: 'Khule design ke shoes jo straps se paon par tikte hain.', example: 'Garam mausam mein casual walk ke liye comfortable sandals pehno.' },
          { name: 'Loafers', detail: 'Slip-on shoes jin mein lace bandhne ki zaroorat nahi hoti.', example: 'Brown loafers chinos ke saath smart-casual look dete hain.' },
          { name: 'Khussa / jutti', detail: 'South Asian traditional flat footwear, aksar embroidered ya decorated hota hai.', example: 'Khussa shalwar kameez ke saath shaadi ya Eid par pehna ja sakta hai.' },
        ],
      },
      {
        title: 'T-Shirts',
        heading: 'T-shirts ke aapke listed designs',
        definition: 'T-shirt casual knit shirt hoti hai. Neeche aapke diye hue labels rakhe hain; horse ka lafz color hai ya graphic design, yeh note se clear nahi.',
        concept: 'T-SHIRTS · DESIGN · EXAMPLE',
        apparelTypes: [
          { name: 'White horse', detail: 'Aapka original T-shirt label. White color, horse graphic, ya dono ka exact matlab confirm nahi.', example: 'order se pehle listing ki photo dekh kar confirm karo ke “White horse” white T-shirt hai ya horse-print design.' },
          { name: 'Dark horse', detail: 'Aapka original T-shirt label. Is se dark color ya horse graphic murad hai, yeh note se clear nahi.', example: '“Dark horse” T-shirt select karte waqt color aur print ki product photo verify karo.' },
        ],
      },
      {
        title: 'Shirts',
        heading: 'Shirts ki aam qismein',
        definition: 'Shirt ka collar, sleeves, buttons aur fabric uske style aur use ko badalte hain.',
        concept: 'SHIRTS · COLLAR · OCCASION',
        apparelTypes: [
          { name: 'T-shirt', detail: 'Aam tor par soft knit fabric ki short-sleeve shirt; collar ya buttons zaroori nahi.', example: 'Plain cotton T-shirt ghar ya casual outing ke liye pehni ja sakti hai.' },
          { name: 'Polo shirt', detail: 'Collar aur chhoti button placket wali knit shirt.', example: 'Polo shirt ko chinos ke saath casual office day par pehna ja sakta hai.' },
          { name: 'Dress shirt', detail: 'Collar aur front buttons wali shirt jo formal ya office outfit ke liye hoti hai.', example: 'White dress shirt suit ke neeche interview mein pehni ja sakti hai.' },
          { name: 'Casual button-down', detail: 'Buttons aur collar wali relaxed shirt, jo formal dress shirt se zyada casual fabric ya pattern mein hoti hai.', example: 'Check button-down ko jeans ke saath weekend par pehna ja sakta hai.' },
          { name: 'Henley shirt', detail: 'Round neckline aur chhoti button placket wali casual shirt, aam tor par bina collar.', example: 'Long-sleeve Henley thanday din mein jacket ke neeche pehni ja sakti hai.' },
          { name: 'Kurta', detail: 'South Asian lambi shirt jo aam tor par side slits aur front placket ke saath hoti hai.', example: 'Cotton kurta garmiyon mein shalwar ya trousers ke saath pehna ja sakta hai.' },
        ],
      },
      {
        title: 'Pants (Pents)',
        heading: 'Pants ki aam qismein',
        definition: 'Aapka original menu label “Pents”; standard English spelling “Pants” hai. Cut, fabric aur pockets ke mutabiq pants casual ya formal ho sakti hain.',
        concept: 'PANTS · FIT · FABRIC',
        apparelTypes: [
          { name: 'Jeans', detail: 'Denim fabric ki mazboot casual pants.', example: 'Blue jeans T-shirt aur sneakers ke saath rozmarra pehni ja sakti hain.' },
          { name: 'Chinos', detail: 'Cotton twill ki halki aur smart-casual pants.', example: 'Beige chinos polo shirt aur loafers ke saath pehne ja sakte hain.' },
          { name: 'Dress trousers', detail: 'Formal kapray ki tailored pants jo suit ya office outfit ka hissa ho sakti hain.', example: 'Navy dress trousers matching blazer ke saath formal meeting mein pehne ja sakte hain.' },
          { name: 'Cargo pants', detail: 'Side par extra pockets wali casual ya utility pants.', example: 'Cargo pants mein chhoti cheezein rakh kar outdoor walk par ja sakte ho.' },
          { name: 'Joggers', detail: 'Relaxed pants jin ke ankle par aksar elastic ya cuff hota hai.', example: 'Joggers workout ya ghar par aaraam ke liye pehne ja sakte hain.' },
          { name: 'Shalwar', detail: 'South Asian loose-fit trousers jo aksar kameez ya kurta ke saath pehne jate hain.', example: 'Safed shalwar ko rozmarra cotton kameez ke saath pehna ja sakta hai.' },
        ],
      },
      {
        title: 'Caps',
        heading: 'Caps ke aapke listed designs',
        definition: 'Cap headwear hota hai; aapka diya hua label “Black Markhor” yahan preserve kiya hai. Exact logo ya fabric details note mein nahi thin.',
        concept: 'CAPS · DESIGN · EXAMPLE',
        apparelTypes: [
          { name: 'Black Markhor', detail: 'Aapki list ka black Markhor cap label; mumkin hai Markhor ka logo/design ho.', example: 'cap khareedne se pehle front par Markhor ka logo aur black shade ki photo dekh lo.' },
        ],
      },
      {
        title: 'Belts',
        heading: 'Belts ke aapke listed options',
        definition: 'Belt ka color, strap aur buckle uski style batate hain. Aapke original labels aur mumkin spelling corrections saath diye hain.',
        concept: 'BELTS · COLOR · BUCKLE',
        apparelTypes: [
          { name: 'Orange', detail: 'Aapki list ka orange belt option.', example: 'orange belt ko neutral rang ke kapron ke saath accent ke taur par pehno.' },
          { name: 'Black Tread (original wording)', detail: 'Aapka original label “Black Tread”; mumkin spelling “Black thread” ho sakti hai, lekin exact design confirm nahi.', example: 'belt order se pehle strap ki texture wali close-up photo check karo.' },
          { name: 'Black backal pin (possibly buckle pin)', detail: 'Aapka original label “Black backal pin”; mumkin sahi term “black buckle pin” hai. Exact buckle style verify karni hogi.', example: 'purchase se pehle buckle aur pin ka close-up dekh kar fastening confirm karo.' },
        ],
      },
      {
        title: 'Salwar Kameez',
        heading: 'Salwar kameez ke aapke listed options',
        definition: 'Aapke diye hue rang aur fabric/embroidery labels yahan jyon ke tyon rakhe hain.',
        concept: 'SALWAR KAMEEZ · FABRIC · COLOR',
        apparelTypes: [
          { name: 'White shiny thread', detail: 'Safed kapray ya design par chamakdar dhaage ka aapka label.', example: 'close-up photo dekh kar white shiny-thread embroidery ki chamak aur placement check karo.' },
          { name: 'White cotton', detail: 'Safed cotton salwar kameez option.', example: 'garm din mein white cotton suit rozmarra pehnne ke liye halka rehta hai.' },
          { name: 'Light Green', detail: 'Aapka light-green color option.', example: 'light green suit ke saath white dupatta rang ko balance kar sakta hai.' },
          { name: 'Little dark green', detail: 'Aapka original shade label “Little dark green”; mumkin matlab halka sa dark-green shade hai.', example: 'kapray ko daylight mein dekh kar confirm karo ke shade kitna dark hai.' },
          { name: 'Dark Blue', detail: 'Aapka dark-blue color option.', example: 'dark blue suit ke saath light-colored khussa ya dupatta contrast de sakta hai.' },
        ],
      },
      {
        title: 'Trousers',
        heading: 'Trousers ki aam qismein',
        definition: 'Trousers lafz aksar formal ya tailored pants ke liye use hota hai; regional usage mein pants aur trousers overlap bhi karte hain.',
        concept: 'TROUSERS · FIT · OCCASION',
        apparelTypes: [
          { name: 'Dress trousers', detail: 'Formal kapray ki tailored trousers.', example: 'navy dress trousers office shirt aur blazer ke saath pehne ja sakte hain.' },
          { name: 'Pleated trousers', detail: 'Waist ke paas pleats/folds wali trousers.', example: 'pleated trousers ko tucked-in shirt ke saath formal event par pehno.' },
          { name: 'Flat-front trousers', detail: 'Front par pleats ke baghair seedha, simple cut.', example: 'flat-front trousers ko polo shirt ke saath smart-casual look ke liye pehno.' },
          { name: 'Wide-leg trousers', detail: 'Leg ke neeche tak zyada khula cut.', example: 'wide-leg trousers ke saath fitted shirt proportions ko balance karti hai.' },
          { name: 'Slim-fit trousers', detail: 'Leg ke saath relatively fitted cut.', example: 'slim-fit trousers ko aisi shirt ke saath pehno jo movement ko tang na kare.' },
        ],
      },
      {
        title: 'Pent-Coat',
        heading: 'Pant-coat ke aam styles',
        definition: 'Aapka original label “Pent-Coat”; standard spelling “pant coat” ya “pant-coat suit” hoti hai.',
        concept: 'PANT-COAT · SUIT · EXAMPLE',
        apparelTypes: [
          { name: 'Two-piece pant coat', detail: 'Matching coat/blazer aur trousers ka set.', example: 'charcoal two-piece pant coat ko white shirt aur formal shoes ke saath pehno.' },
          { name: 'Three-piece pant coat', detail: 'Coat, trousers aur matching waistcoat ka set.', example: 'wedding ya formal event par three-piece suit ke saath tie pehni ja sakti hai.' },
          { name: 'Single-breasted coat', detail: 'Front par buttons ki aik row wala coat.', example: 'single-breasted coat ko interview ke liye matching trousers ke saath pehno.' },
        ],
      },
      {
        title: 'Vase-coat (Waistcoat)',
        heading: 'Waistcoat ke aapke listed option',
        definition: 'Aapka original label “Vase-coat”; sahi English spelling “Waistcoat” hai. Waistcoat sleeveless vest hoti hai jo shirt ya suit ke upar pehni jati hai.',
        concept: 'WAISTCOAT · COLOR · DETAIL',
        apparelTypes: [
          { name: 'Black with red tissue', detail: 'Aapka original waistcoat design label. “Red tissue” kis fabric ya decoration ko kehta hai, yeh note mein clear nahi.', example: 'kapra order karne se pehle seller se red tissue detail ki close-up photo mangwao.' },
        ],
      },
      {
        title: 'Glasses',
        heading: 'Glasses ki aam qismein',
        definition: 'Glasses nazar theek karne, dhoop se bachne, ya style ke liye pehne ja sakte hain.',
        concept: 'GLASSES · LENS · USE',
        apparelTypes: [
          { name: 'Prescription glasses', detail: 'Nazar ki prescription ke mutabiq lenses wale glasses.', example: 'naye prescription glasses banwate waqt optician ko latest prescription dikhayo.' },
          { name: 'Sunglasses', detail: 'Dhoop mein aankhon ki roshni kam karne wale tinted lenses.', example: 'bahar tez dhoop mein UV protection wali sunglasses pehno.' },
          { name: 'Reading glasses', detail: 'Qareeb ka text parhne mein madad dene wale glasses.', example: 'kitab parhte waqt reading glasses use karo agar prescription is ka kehti ho.' },
          { name: 'Aviator frames', detail: 'Aksar teardrop shape ke frame; prescription ya sunglasses lenses ke saath milte hain.', example: 'aviator frames face par fit hain ya nahi, khareedne se pehle try karo.' },
          { name: 'Wayfarer frames', detail: 'Aksar trapezoid shape ka classic frame style.', example: 'wayfarer frames ko prescription lens ya sunglasses ke taur par choose kiya ja sakta hai.' },
        ],
      },
    ],
  },
  tools: {
    name: 'Tools & Formats',
    chapters: [
      {
        title: 'VS Code Extensions',
        heading: 'VS Code extensions aur developer tools',
        definition: 'Extensions editor mein extra features add karti hain. Aapke note ke naam preserve kiye hain; har tool ka aik seedha use aur example bhi diya hai.',
        concept: 'VS CODE · EXTENSIONS · EXAMPLES',
        glossarySections: [{ title: 'Code editor tools', items: [
          { term: 'Prettier', detail: 'Code formatter jo supported files ko consistent style mein format karta hai.', example: 'save par `app.js` ko Prettier se format karwao.' },
          { term: 'VS Code Icons / Material Icon Theme', detail: 'Explorer mein file aur folder ke liye recognizable icons dikhate hain.', example: '`package.json` ko alag icon se pehchano.' },
          { term: 'Bracket Pair Colorizer 2 / Bracket Pair Colorization', detail: 'Aapka note Bracket Pair Colorizer 2 kehta hai. VS Code mein bracket pair colorization ab built-in setting hai, is liye pehle built-in feature use kar sakte ho.', example: 'nested `if` blocks ke matching `{}` ko rang se trace karo.' },
          { term: 'Indent Rainbow', detail: 'Indentation levels ko colors se dikhata hai, jis se nested code ka structure nazar aata hai.', example: 'Python ke nested loops mein har indentation depth ko alag rang dekho.' },
          { term: 'Live Server', detail: 'Local web page serve karta hai aur supported setup mein changes par browser refresh karta hai.', example: '`index.html` edit karke browser mein local preview dekho.' },
          { term: 'Error Lens', detail: 'Diagnostics ko code line ke qareeb highlight karta hai taa-ke errors jaldi nazar aayein.', example: 'undefined variable par editor usi line par error message dikhaye.' },
          { term: 'Path Intellisense / filename autocomplete', detail: 'Import ya file path likhte waqt maujood files aur folders ke suggestions deta hai.', example: '`import Header from "./` likho to `Header.js` ka suggestion aaye.' },
          { term: 'Emmet / React Emmet', detail: 'HTML aur CSS shorthand ko expanded markup/style mein badalta hai; VS Code mein Emmet support aam tor par built in hoti hai.', example: '`ul>li*3` expand karke teen list items ka HTML banao.' },
          { term: 'ESLint', detail: 'JavaScript/TypeScript source ko lint karke code-quality aur possible bug rules report karta hai; yeh Node.js ko VS Code ki ijazat dene wala extension nahi.', example: 'Unused variable ho to ESLint editor mein warning dikha sakta hai.' },
          { term: 'Auto Rename Tag / Auto Close Tag', detail: 'HTML/XML tag editing mein matching closing ya opening tag ko update ya add karta hai.', example: '`<div>` ko `<main>` karne par closing tag bhi `</main>` ho jaye.' },
          { term: 'Autoprefixer / CSS auto-prefix', detail: 'Build ke waqt target browser configuration ke mutabiq zaroori CSS vendor prefixes generate karta hai.', example: '`display: flex` ke liye purane targeted browsers ke prefixes output mein add hon.' },
          { term: 'ES7 React/Redux/GraphQL/React-Native snippets', detail: 'React aur JavaScript patterns ke code snippets deta hai; snippet names aur shortcuts extension version par depend karte hain.', example: 'component snippet expand karke React component ka boilerplate banao.' },
          { term: 'JavaScript (ES6) snippets / Babel JavaScript', detail: 'JavaScript syntax highlighting ya reusable code snippets provide karte hain.', example: 'arrow function snippet se `(value) => value` ka template insert karo.' },
          { term: 'Code Runner', detail: 'Supported languages ke code ko editor se run karne ki sahulat deta hai; runtime alag se installed/configured hona chahiye.', example: 'chhota JavaScript snippet Node.js ke zariye chalao.' },
          { term: 'REST Client / Thunder Client', detail: 'VS Code ke andar HTTP/API requests bhejne aur responses inspect karne ke tools.', example: '`GET http://localhost:3000/api/items` bhej kar JSON response dekho.' },
          { term: 'React Native Tools', detail: 'React Native apps ki debugging aur development workflow ke liye VS Code support.', example: 'emulator par React Native app ke JavaScript debugger se breakpoint lagao.' },
          { term: 'GitLens', detail: 'Git history, blame aur repository context ko editor mein dikhata hai.', example: 'line par dekh lo ke aakhri edit kis commit mein hui.' },
          { term: 'Quokka.js', detail: 'JavaScript/TypeScript scratch code ko editor mein foran evaluate karke inline result dikhata hai.', example: '`2 + 2` likh kar result editor ke paas dekho.' },
          { term: 'Live Share', detail: 'VS Code session mein doosre collaborator ke saath live editing aur debugging share karne ka feature/extension.', example: 'teammate ko session mein invite karke aik file par mil kar kaam karo.' },
          { term: 'Peacock', detail: 'Workspace ke mutabiq VS Code window ka accent color badalta hai.', example: 'frontend workspace ko green aur API workspace ko blue rakho.' },
          { term: 'Bookmarks / Task Tree', detail: 'Bookmarks code locations ko mark karte hain; Task Tree project tasks dikhane ke liye use ho sakta hai. “Task Tree” ka exact extension aapke note mein specify nahi.', example: 'function par bookmark laga kar baad mein us jagah wapas jao.' },
          { term: 'Intellicode / Gemini Code Assist', detail: 'AI-assisted code suggestions ya coding help dene wale tools; account, extension aur configuration ke mutabiq features farq ho sakte hain.', example: 'function ke comment se initial code suggestion lo aur phir result review karo.' },
          { term: 'Power Mode / VS Code Pets / Cobalt2', detail: 'Power Mode cursor animations deta hai, VS Code Pets editor mein animated companion dikhata hai, aur Cobalt2 color theme hai.', example: 'Cobalt2 theme select karke editor colors badlo; Power Mode ko optional visual effect ke liye on karo.' },
          { term: 'Vim mode (original note: “Vin mood”)', detail: 'Vim-style modal editing mode; aapke original note ki likely correction “Vim mode” hai.', example: 'Normal mode mein `dd` current line delete karta hai; insert mode mein text type hota hai.' },
          { term: '100 Days of Code', detail: 'Learning/challenge label jo rozana coding practice track karne ke liye use hota hai; extension ka exact publisher/feature aapke note mein specify nahi.', example: 'apni 100-day practice streak ke liye aaj ka completed lesson note karo.' },
          { term: 'Restore Terminals / Remove SSH', detail: 'Aapke note ke labels preserve kiye hain. Exact extension ya setting clear nahi; terminal restore aur SSH removal ke liye VS Code built-in commands/settings bhi ho sakti hain.', example: 'window reload ke baad terminal panel dobara khol kar running task check karo.' },
          { term: 'CSS-web-kits', detail: 'Aapka original label “CSS-web-kits”; shayad CSS vendor prefixes murad hain. Un prefixes ko Autoprefixer target browser rules ke mutabiq add karta hai.', example: '`user-select` ki compatible prefixed declaration build output mein aa sakti hai.' },
          { term: 'WordPress / Elementor custom code', detail: 'Aapka note code ko child theme, code-snippet plugin, Elementor custom-code option ya HTML widget mein add karne ke options batata hai. Sahi jagah code ki type aur site setup par depend karti hai.', example: 'Chhota page-only HTML snippet HTML widget mein, jabke reusable theme customization child theme mein rakh sakte ho.' },
        ] }],
      },
      {
        title: 'Browser Extensions', heading: 'Browser extensions aur web tools',
        definition: 'Browser extensions browser ke andar extra kaam karti hain. Aapke diye hue names ke saath practical misaal bhi di gayi hai.', concept: 'BROWSER · EXTENSIONS · EXAMPLES',
        glossarySections: [{ title: 'Browser tools', items: [
          { term: 'Wappalyzer', detail: 'Public web page se nazar aane wali technologies ka andaza lagane wala profiler.', example: 'kisi site par check karo ke visible stack React ya analytics tool use karta hai ya nahi.' },
          { term: 'Web Developer', detail: 'Browser toolbar se web page ke HTML, CSS aur layout ko inspect ya temporarily alter karne ke developer tools.', example: 'Page ke CSS styles temporarily disable karke layout ka farq dekho.' },
          { term: 'Imageye / Image downloader', detail: 'Web page par milne wali images ko browse ya download karne ke tools.', example: 'apni permitted reference page se product image save karo.' },
          { term: 'ColorZilla', detail: 'Browser page par rang pick karne aur color values dekhne ka tool.', example: 'button ka hex color `#2f6b4f` copy karo.' },
          { term: 'Mobile Simulator', detail: 'Responsive layouts ko mukhtalif screen dimensions par preview karne ka browser tool.', example: 'page ko 390px mobile viewport par inspect karo.' },
          { term: 'CSS Peeper', detail: 'Web page ke visible styling details inspect karne ka design tool.', example: 'kisi element ka font size aur color reference ke taur par dekho.' },
          { term: 'Picture-in-Picture', detail: 'Supported video ko chhoti floating window mein chalata hai.', example: 'tutorial video ko notes par kaam karte hue corner mein rakho.' },
          { term: 'GoFullPage', detail: 'Browser page ka full-page screenshot capture karta hai.', example: 'poori long article ko aik image capture mein save karo.' },
          { term: 'IDM Integration Module', detail: 'Internet Download Manager ke saath browser download integration.', example: 'supported download link browser se IDM ko hand off ho.' },
          { term: 'Clearbit Connect', detail: 'Aapke note mein business email discovery tool ka naam; availability ya current service status verify kiye baghair isay sirf copied reference samjho.', example: 'business contact dhoondte waqt pehle apni organization ki privacy rules check karo.' },
          { term: 'Unhook', detail: 'YouTube par recommendations aur suggested-video sections ko kam ya hide karne ke liye extension.', example: 'home page par suggested videos hide karke sirf search se video kholo.' },
          { term: 'aText / Auto Dark Mode', detail: 'Aapke note ke browser labels preserve kiye hain; aText text-expansion tool ka naam ho sakta hai aur Auto Dark Mode pages ka appearance badal sakta hai. Exact browser/version context specify nahi.', example: 'text shortcut se repeated phrase insert karo, ya dark appearance toggle karke page dekho.' },
          { term: 'Chrome Web Store', detail: 'Chrome-compatible browser extensions ka marketplace; extension install karne se pehle permissions aur publisher dekhna useful hai.', example: 'store listing mein requested permissions parh kar extension choose karo.' },
          { term: '“Safeguard your PC in a quiet and reliable way”', detail: 'Yeh aapke note mein promotional jumla hai, extension ka clear naam nahi.', example: 'is phrase ko product description samjho, browser extension listing ka title nahi.' },
        ] }],
      },
      {
        title: 'Image Formats', heading: 'Image file extensions',
        definition: 'Image extension se file ka format samajhne mein madad milti hai; kuch formats animation ya transparency bhi support karte hain.', concept: 'IMAGES · EXTENSIONS · EXAMPLES',
        glossarySections: [{ title: 'Image formats', items: [
          { term: '.apng', detail: 'Animated PNG image; PNG-based format animation frames rakh sakta hai.', example: 'chhota animated loading indicator `loader.apng` ho sakta hai.' },
          { term: '.gif', detail: 'GIF image format; limited palette aur simple frame animation support karta hai.', example: 'short reaction animation `reaction.gif` ho sakti hai.' },
          { term: '.ico / .cur', detail: '.ico aam tor par Windows icon ya favicon ke liye, aur .cur cursor images ke liye use hota hai.', example: 'site ka favicon `favicon.ico` ho sakta hai.' },
          { term: '.jpg / .jpeg / .pjpeg / .jfif / .pjp', detail: 'JPEG family ki raster image extensions; JPEG aam tor par lossy compression use karta hai. `.pjpeg` progressive JPEG ko indicate kar sakta hai.', example: 'camera photo `holiday.jpg` ke taur par share karo.' },
          { term: '.png', detail: 'PNG lossless raster image format hai aur transparency support karta hai.', example: 'transparent-background logo `logo.png` mein save karo.' },
          { term: '.svg', detail: 'SVG scalable vector graphics format hai; icons aur diagrams ke liye useful.', example: '`mark.svg` ko bara ya chhota karne par edges sharp rehte hain.' },
        ] }],
      },
      {
        title: 'Video Formats', heading: 'Video aur multimedia file extensions',
        definition: 'Container format file mein video, audio aur kabhi subtitles jama karta hai; codec video/audio ko encode karta hai.', concept: 'VIDEO · CONTAINERS · EXAMPLES',
        glossarySections: [{ title: 'Video formats', items: [
          { term: '.webm', detail: 'Web-focused open multimedia container format.', example: 'website par short clip `demo.webm` ke taur par serve ho sakti hai.' },
          { term: '.ogg / .ogv', detail: 'Ogg container ki extensions; `.ogv` aam tor par Ogg video ke liye use hota hai.', example: 'open-format video `clip.ogv` ke naam se mil sakti hai.' },
          { term: '.rm / .ram', detail: 'RealMedia se related purane media file/reference extensions.', example: 'archived stream ki `.rm` file legacy player maang sakti hai.' },
          { term: '.flv / .swf', detail: 'Adobe Flash ke legacy video/interactive content formats; modern browsers mein Flash support band ho chuka hai.', example: 'purani site ki `.swf` animation modern browser mein seedha na chale.' },
          { term: '.mp4 / .m4v', detail: 'MP4 family multimedia container extensions; exact supported codecs file/player par depend karte hain.', example: 'phone video `family.mp4` ke taur par export karo.' },
          { term: '.mpg / .mpeg', detail: 'MPEG video standards se mutaliq common file extensions.', example: 'purani video archive mein `recording.mpeg` ho sakti hai.' },
          { term: '.wmv', detail: 'Windows Media Video se mutaliq video extension.', example: 'legacy Windows video `training.wmv` ho sakti hai.' },
          { term: '.avi', detail: 'Audio Video Interleave multimedia container extension.', example: 'older camera footage `clip.avi` mein save ho sakti hai.' },
          { term: '.mov', detail: 'QuickTime movie container extension.', example: 'video editor se `scene.mov` export karo.' },
          { term: '.mkv', detail: 'Matroska Video container extension; multiple tracks aur subtitles rakh sakti hai.', example: 'film `movie.mkv` mein alag subtitle track ho.' },
          { term: '.3gp', detail: '3GPP se associated mobile multimedia container.', example: 'older handset ki recording `video.3gp` ho.' },
        ] }],
      },
      {
        title: 'Audio Formats', heading: 'Audio file extensions',
        definition: 'Audio files compressed ya uncompressed ho sakti hain; extension se format ka hint milta hai, lekin codec aur quality settings bhi matter karti hain.', concept: 'AUDIO · CODECS · EXAMPLES',
        glossarySections: [{ title: 'Audio formats', items: [
          { term: '.mid / .midi', detail: 'MIDI event data hota hai, recorded waveform audio nahi; compatible instrument/software usay sound banata hai.', example: '`theme.mid` ko music software mein mukhtalif instruments se play karo.' },
          { term: '.rm / .ram', detail: 'RealMedia legacy audio/video ecosystem ki extensions.', example: 'archive ki `.ra`/`.ram` media file legacy player mein chal sakti hai.' },
          { term: '.wma', detail: 'Windows Media Audio se mutaliq audio extension/codec family.', example: '`voice.wma` ko compatible media player mein kholo.' },
          { term: '.aac', detail: 'Advanced Audio Coding se related compressed audio extension/codec.', example: '`podcast.aac` ko AAC support wale player mein play karo.' },
          { term: '.wav', detail: 'Waveform Audio File Format; aam tor par uncompressed PCM audio ke liye use hota hai.', example: 'editing ke liye microphone recording `take.wav` rakho.' },
          { term: '.ogg', detail: 'Ogg container extension; audio mein Vorbis ya Opus jaisa codec ho sakta hai.', example: '`music.ogg` ko compatible browser ya player mein play karo.' },
          { term: '.mp3', detail: 'MPEG-1 Audio Layer III compressed audio file extension.', example: 'song ko `track.mp3` ke taur par share karo.' },
          { term: '.mp4 / .m4a', detail: 'MP4 container family; `.m4a` aksar audio-only MP4 files ke liye use hota hai.', example: 'phone voice memo `memo.m4a` ho sakta hai.' },
        ] }],
      },
      {
        title: 'Other File Formats', heading: 'Documents, code aur archive extensions',
        definition: 'File extensions document, code, configuration aur archive formats ko pehchanne mein madad deti hain.', concept: 'FILES · DOCUMENTS · CODE',
        glossarySections: [{ title: 'Common file extensions', items: [
          { term: '.exe', detail: 'Windows executable program ya installer file extension.', example: '`installer.exe` Windows app setup chala sakta hai.' },
          { term: '.pdf', detail: 'Portable Document Format; page layout ko devices par consistent rakhne ke liye use hota hai.', example: 'final CV ko `cv.pdf` mein export karke bhejo.' },
          { term: '.txt', detail: 'Plain text file extension.', example: '`todo.txt` mein simple notes likho.' },
          { term: '.doc / .docx', detail: 'Microsoft Word document extensions; `.doc` legacy format aur `.docx` Office Open XML format hai.', example: 'editable letter `letter.docx` mein save karo.' },
          { term: '.xlsx', detail: 'Office Open XML spreadsheet workbook extension.', example: 'inventory ko `stock.xlsx` spreadsheet mein track karo.' },
          { term: '.html', detail: 'HyperText Markup Language document extension; web content ki structure likhta hai.', example: '`index.html` browser mein web page render karta hai.' },
          { term: '.js', detail: 'JavaScript source file extension.', example: '`script.js` page par button click handle kare.' },
          { term: '.css', detail: 'Cascading Style Sheets file extension; web page ki presentation/style define karti hai.', example: '`styles.css` heading ka rang aur spacing set kare.' },
          { term: '.md', detail: 'Markdown text document extension. Aapka note “make directory” bhi kehta tha; directory banane ke liye `mkdir` command hota hai, `.md` nahi.', example: '`README.md` mein headings aur code blocks likho.' },
          { term: '.json', detail: 'JavaScript Object Notation data format extension; JSON file valid data text hoti hai, executable JavaScript nahi.', example: '`package.json` project scripts aur package metadata rakhta hai.' },
          { term: '.zip / .rar', detail: 'Compressed archive extensions. Aapke “Zone Improvement Plan” note ka expansion postal ZIP Code ke liye hai, `.zip` archive ke liye nahi.', example: '`project.zip` ya `photos.rar` mein multiple files archive karo.' },
          { term: '.bat / .ini', detail: 'Windows batch commands ki `.bat` file aur configuration/initialization settings rakhne wali `.ini` file.', example: '`run.bat` server start kare aur `app.ini` uska port store kare.' },
          { term: '.3gp / .mkv / .avi', detail: 'Mobile multimedia, Matroska aur Audio Video Interleave se mutaliq video container extensions.', example: '`.avi` file edit karne se pehle format ko player mein verify karo.' },
        ] }],
      },
      {
        title: 'Web & Domain Names', heading: 'Web naming aur domain suffixes',
        definition: 'Domain ke aakhri hissa ko top-level domain (TLD) kehte hain. Extensions ya file suffixes se ise alag samjho.', concept: 'DOMAINS · TLD · EXAMPLES',
        glossarySections: [{ title: 'Domain suffixes', items: [
          { term: '.com', detail: 'Generic top-level domain (gTLD), jo commercial naam se shuru hua aur ab bohat se aam websites ke liye use hota hai.', example: '`example.com` mein `.com` domain suffix hai.' },
          { term: '.ai', detail: 'Anguilla ka country-code top-level domain (ccTLD), jo AI-related sites mein bhi popular hai.', example: '`studio.ai` ka `.ai` domain suffix hai.' },
          { term: '.dev', detail: 'Developers aur development projects ke liye use hone wala generic top-level domain.', example: '`docs.dev` mein `.dev` top-level domain hai.' },
        ] }],
      },
    ],
  },
  journey: {
    name: 'Journey',
    chapters: [
      {
        title: 'Bathing', heading: 'Bathing kit',
        definition: 'Nahaane ke waqt saath rakhne wali cheezon ki checklist.', concept: 'JOURNEY · BATHING',
        checklistSections: [{ title: 'Bathing items', items: ['Clothes', 'Banyan', 'Slippers', 'Soap', 'Shampoo / Conditioner', 'Oil', 'Brush', 'Feet-cleaner brush'] }],
      },
      {
        title: 'For Bike', heading: 'Bike ke liye checklist',
        definition: 'Bike ride ke liye Normal essentials ke saath yeh extra items check karo.', concept: 'JOURNEY · BIKE', includesNormal: true,
        checklistSections: [{ title: 'Bike extras', items: ['Glasses 🕶️', 'Mask 🎭', 'Cap 🧢', 'Bike-cleaning cloth'] }],
      },
      {
        title: 'For Tape Ball Cricket', heading: 'Tape-ball cricket kit',
        definition: 'Cricket le jaate waqt Normal essentials ke saath equipment aur paani bhi checklist se dekh lo.', concept: 'JOURNEY · CRICKET', includesNormal: true,
        checklistSections: [{ title: 'Cricket extras', items: ['2 bats', 'At least 1 ball', 'Wicket', 'Cap', 'Rough cloth to clean the ball', 'Glasses if possible 🕶️', 'At least 2 tape rolls', 'Water', 'Bag for ball, water and tape'] }],
      },
      {
        title: 'LHR Food', heading: 'Lahore ke food options',
        definition: 'Aapke note mein likhe breakfast, evening aur night food options.', concept: 'LAHORE · FOOD',
        checklistSections: [
          { title: 'Morning', items: ['Dahi + fruit', 'Egg (custom boiling)', 'Naan / chanay', '4-piece bread'] },
          { title: 'Evening', items: ['Aalu-naan', 'Naan + tikki / pakora / samosa / Tala-nan (original wording)', 'Naan / roti + chanay', 'Biryani', 'Daal chawal', 'Masar, chana-dal, mash-dal, haleem'] },
          { title: 'Night', items: ['Fruit', 'Snacks', 'Roti + salan', 'Fast food'] },
        ],
      },
      {
        title: 'Normal', heading: 'Roz saath rakhne wali cheezein',
        definition: 'Aapki basic outing checklist; Bike, cricket aur LHR trips mein bhi isay include kar sakte ho.', concept: 'JOURNEY · EVERYDAY ESSENTIALS',
        checklistSections: [{ title: 'Normal essentials', items: ['Handkerchief or tissue', 'Wallet', '500+ Rs./-', 'Card', 'ID', 'Metro', 'ATM', 'Mobile 📱', 'Pad 🗒️ and pencil ✏️', 'Watch ⌚'] }],
      },
      {
        title: 'To LHR / Week', heading: 'Lahore / weekly packing checklist',
        definition: 'Aapki Lahore ya haftay bhar ke safar ki list. Laptop original note mein do martaba tha; yahan usay duplicate note ke saath aik check item rakha hai.', concept: 'JOURNEY · WEEKLY PACKING', includesNormal: true,
        checklistSections: [
          { title: 'Bag, devices aur travel', items: ['Bag (laptop + ingredients)', 'Luggage', 'Laptop (original list mein 2 martaba)', 'Charger', 'Cleaning cloth', 'Shopper if it rains (original: “Shoper”)', 'Mobile', 'Adapter (original: “Adopter”)', 'Cable', 'Internet / data access', 'Handsfree', 'Water bottle'] },
          { title: 'Food', items: ['Khaana', 'Date', 'Roasted chickpeas', 'Curry', 'Loaf / bread', 'Fruit'] },
          { title: 'Stationery', items: ['Stationery', 'Note-pad', '2 pencils'] },
          { title: 'Physical tools', items: ['Hand-stretcher (as written)', 'Perfume', 'Comb', 'Oils', 'Lip-oil', 'Vaseline (original: “vase-line”)', 'Cream', 'Glasses', 'Scissors', 'Rs. 2000+'] },
          { title: 'Wearing', items: ['Trousers', 'T-shirt', '2 suits', 'Cap', 'Mask', 'Handkerchief'] },
        ],
      },
      {
        title: 'Weekly Ingredients', heading: 'Haftay ki ingredients aur zarooriyat',
        definition: 'Aapki weekly shopping/packing ingredients list, checkbox ke saath.', concept: 'JOURNEY · WEEKLY INGREDIENTS',
        checklistSections: [{ title: 'Ingredients checklist', items: ['Bag (laptop + ingredients)', 'Clothes (3 dresses and 1 trousers-shirt)', 'Cap', 'Keys', 'Handkerchief + rough handkerchief', 'Knife + spoon + plate', 'Laptop + charger', 'Mobile + charger', 'Maswak (original note ended with “+”; item incomplete)', 'Money (4K/week + metro / ID card)', 'Pencil + copy', 'Shoes + sandal + polish + brush', 'Soap + face-wash + comb + perfume + cream + Vaseline', 'Water bottle', 'Watch'] }],
      },
    ],
  },
  names: {
    name: 'Names',
    chapters: window.zbookNames || [],
  },
  communication: {
    name: 'Communication',
    chapters: window.zbookCommunication || [],
  },
};

const tabs = [...document.querySelectorAll('.department-tab')];
const departmentTabs = document.querySelector('.department-tabs');
const departmentTabsShell = document.querySelector('.department-tabs-shell');
const chapterList = document.querySelector('#chapter-list');
const chapterRail = document.querySelector('.chapter-rail');
const lessonCard = document.querySelector('#lesson-card');
const panel = document.querySelector('#department-content');
const chapterCount = document.querySelector('#chapter-count');
const projectSearchInput = document.querySelector('#project-search-input');
const projectSearchResults = document.querySelector('#project-search-results');

const viewStorageKey = 'z-book:last-view';
const journeyChecklistStorageKey = 'z-book:journey-checklist';
function readJourneyChecklist() {
  try { return JSON.parse(localStorage.getItem(journeyChecklistStorageKey) || '{}') || {}; }
  catch { return {}; }
}
function writeJourneyChecklist(value) {
  try { localStorage.setItem(journeyChecklistStorageKey, JSON.stringify(value)); }
  catch { /* Checklist still works until the page is refreshed if storage is unavailable. */ }
}
function getSavedView() {
  try {
    const savedView = JSON.parse(localStorage.getItem(viewStorageKey) || 'null');
    if (!savedView || !Object.hasOwn(departments, savedView.department)) return null;
    return savedView;
  } catch {
    return null;
  }
}

const savedView = getSavedView();
let activeDepartment = savedView?.department || 'biology';
let activeChapter = savedView?.chapterTitle
  ? Math.max(0, departments[activeDepartment].chapters.findIndex((chapter) => chapter.title === savedView.chapterTitle))
  : 0;
let activeResourceCategory = Number.isInteger(savedView?.resourceCategoryIndex) && savedView.resourceCategoryIndex >= 0
  ? savedView.resourceCategoryIndex
  : 0;
let ignoreTabHoverUntilPointerMoves = false;
let ignoreChapterHoverUntilPointerMoves = false;
let ignoreDepartmentHoverUntilPointerMoves = false;
let chapterHoverTimer = null;
let departmentHoverTimer = null;
let revealRestoredChapter = true;
const chapterTitleCollator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

function scheduleHover(timerName, callback) {
  clearTimeout(timerName === 'chapter' ? chapterHoverTimer : departmentHoverTimer);
  const timer = setTimeout(() => {
    if (timerName === 'chapter') chapterHoverTimer = null;
    else departmentHoverTimer = null;
    callback();
  }, 220);
  if (timerName === 'chapter') chapterHoverTimer = timer;
  else departmentHoverTimer = timer;
}

function cancelHover(timerName) {
  const timer = timerName === 'chapter' ? chapterHoverTimer : departmentHoverTimer;
  clearTimeout(timer);
  if (timerName === 'chapter') chapterHoverTimer = null;
  else departmentHoverTimer = null;
}

const glossaryExamples = {
  Duotrigesimal: 'Common 0–9, A–V notation mein decimal 31 ko V₃₂ aur decimal 32 ko 10₃₂ likha ja sakta hai.',
  'Acronym aur initialism': 'NASA aik acronym ki tarah bola jata hai; DOM ke letters alag alag bole jate hain.',
  API: 'Weather app API se aaj ka temperature mangwa sakti hai.',
  CDN: 'Website ki image user ke qareeb CDN server se milne par load time kam ho sakta hai.',
  PNG: 'Transparent logo ko PNG image ke taur par export karke page par dikhaya ja sakta hai.',
  DOM: 'JavaScript DOM ke zariye page ki heading ka text badal sakta hai.',
  HTTP: 'Browser HTTP request bhej kar server se page mangta hai.',
  'Original contact-number note': 'Misal ke taur par +92 Pakistan ka code hai, lekin +1 shared NANP code hai aur har zone ka apna geographic pattern hai.',
  'Country calling code aur dialling prefix': 'Pakistan ka number international format mein +92 se shuru hota hai; doosre mulk se call karne ka access prefix caller ke mulk par depend karta hai.',
  'Nine world numbering zones': '+33 France zone 3 mein, +81 Japan zone 8 mein, aur +92 Pakistan zone 9 mein aata hai.',
  'Zone 1 — NANP': 'NANP number ka international format +1 se shuru hota hai; us ke baad 3-digit area code aur 7-digit local number hota hai.',
  'Zone 2 — Africa': 'Misal: Egypt ka country code +20 aur South Africa ka +27 hai.',
  'Zones 3 aur 4 — Europe': 'Misal: France +33 zone 3, Germany +49 zone 4, aur Andorra +376 teen-digit country code hai.',
  'Zone 5 — Central aur South America': 'Misal: Mexico +52 aur Brazil +55 dono zone 5 ke country codes hain.',
  'Zone 6 — Southeast Asia aur Oceania': 'Misal: Australia +61 aur Singapore +65 zone 6 codes hain.',
  'Zone 7 — Russia aur Kazakhstan': '+7 Russia aur Kazakhstan ka shared country code hai; Uzbekistan ka +998 hai, +7 nahi.',
  'Zone 8 — East Asia aur kuch special codes': 'Misal: Japan +81, China +86 aur Bangladesh +880 hain; Bangladesh zone 8 ka geographic exception hai.',
  'Zone 9 — South Asia aur Middle East': 'Misal: India +91, Pakistan +92 aur Turkey +90 zone 9 ke codes hain.',
  'E.164': 'International format mein Pakistan ka country calling code +92 hota hai, phir us ke baad national number aata hai.',
  ITU: 'ITU-T E.164 ke mutabiq country calling code one, two ya three digits ka ho sakta hai.',
  'ITU-T': 'Mobile operator international numbering recommendation dekhne ke liye ITU-T ki E.164 standard refer kar sakta hai.',
  NANP: 'U.S. aur Canada +1 share karte hain; number mein us ke baad 3-digit area code aur 7-digit local number hota hai.',
  NANPA: 'NANPA ki official site par +1 plan ke area codes aur numbering updates dekhe ja sakte hain.',
  'IP address': 'Router 192.0.2.25 jaise IP address par packet bhejta hai.',
  IP: 'Laptop ko network par `192.0.2.25` jaisa IP address mil sakta hai.',
  ISP: 'Ghar ka broadband connection aam tor par kisi ISP se milta hai.',
  JSON: 'API `{"city":"Lahore"}` jaisa JSON response bhej sakti hai.',
  'Pull request (PR)': 'Feature branch ke changes review ke liye pull request mein bheje jate hain.',
  'Same-origin policy': 'https://site.example aur http://site.example alag origins hain kyun ke scheme alag hai.',
  'Open source': 'Linux ka source code log dekh aur license ke mutabiq modify kar sakte hain.',
  Virus: 'Infected file kholne par virus doosri files tak phail sakta hai.',
  LAN: 'Office ke computers aur printer aik LAN par ho sakte hain.',
  MAN: 'Shehar ke mukhtalif campuses ke LANs ko MAN jor sakta hai.',
  WAN: 'Mukhtalif shehron ke branch offices WAN ke zariye jud sakte hain.',
  PAN: 'Phone aur Bluetooth earbuds mil kar PAN banate hain.',
  GPRS: 'Purana 2G phone GPRS se halka internet data bhej sakta hai.',
  BIOS: 'PC start hote waqt BIOS hardware initialize karke boot shuru karta hai.',
  CMD: 'Windows mein `dir` command CMD window mein files dikhati hai.',
  LCD: 'Laptop ki LCD screen pixels se text aur tasveer dikhati hai.',
  LED: 'Router par jalti LED batati hai ke network connection active hai.',
  POST: 'Computer boot se pehle POST ke zariye memory aur hardware check karta hai.',
  SMPS: 'Desktop ki SMPS wall power ko computer ke components ke liye regulate karti hai.',
  USB: 'USB cable se phone charge bhi hota hai aur files transfer bhi hoti hain.',
  VDU: 'Monitor aik VDU hai jo computer ka visual output dikhata hai.',
  'Function definition': '`function greet(name) { return name; }` aik function definition hai.',
  'HTML button type': '`<button type="button">Menu</button>` form ke andar menu kholta hai magar form submit nahi karta.',
  'Parameter aur argument': '`name` parameter hai; `greet("Ali")` mein `"Ali"` argument hai.',
  'return statement': '`return total;` function ka result caller ko wapas deta hai.',
  'Conditional rendering': 'React mein `isLoggedIn` true ho to dashboard, warna login button dikhaya ja sakta hai.',
  'React Fragment': '`<> <Header /> <Main /> </>` dono components ko extra div ke baghair group karta hai.',
  'HTML boilerplate': 'Naya HTML page `<!doctype html>`, `<head>` aur `<body>` se shuru hota hai.',
  'Framework aur library': 'React library components deti hai; Next.js framework routing aur build rules bhi deta hai.',
  'High-level language (HLL)': 'Python mein `print("Hi")` likhna machine instructions se zyada insani qareeb hai.',
  'Low-level language (LLL)': 'Assembly instruction `MOV` processor ke qareeb low-level code ki misaal hai.',
  MSINFO32: '`Win + R` dabakar `msinfo32` likhein; Windows System Information hardware aur software details dikhata hai.',
  'Iterable object': '`for (const [key, value] of Object.entries({name: "Ali"}))` key-value pair par iterate karta hai.',
  camelCase: '`firstName` camelCase mein likha gaya hai.',
  'kebab-case': '`user-profile` URL slug ya CSS class ka kebab-case naam ho sakta hai.',
  PascalCase: '`UserProfile` React component ka PascalCase naam ho sakta hai.',
  SCREAMING_SNAKE_CASE: '`MAX_RETRIES` constant ka SCREAMING_SNAKE_CASE naam hai.',
  snake_case: '`user_name` Python variable ka snake_case naam hai.',
  Android: 'Android phone par app Play Store ya doosre trusted source se install hoti hai.',
  Apple: 'Apple iPhone aur Mac banati hai; company name acronym nahi.',
  AVI: 'Purani video file `.avi` extension ke saath save ho sakti hai.',
  ICO: 'Browser tab ka chhota site icon aksar `.ico` file hota hai.',
  IPO: 'Company IPO ke zariye pehli martaba public ko shares offer kar sakti hai.',
  MP3: 'Music player `.mp3` audio file play kar sakta hai.',
  OMR: 'Exam sheet par bhare hue bubbles OMR machine read kar sakti hai.',
  SaaS: 'Team browser se hosted project-management SaaS use kar sakti hai.',
  CV: 'Software developer CV mein relevant JavaScript projects aur experience likhta hai; cover letter mein woh samjhata hai ke yeh skills us role se kaise match karti hain.',
  'Cover letter': 'Frontend role ke cover letter mein applicant apna relevant React project aur job ki requirements ke saath uska link batata hai.',
  'Service-based aur product-based company': 'Agency client ke liye website banati hai; product company apna app bechti hai.',
  'TIME Magazine': 'TIME magazine ka cover aik haftay ki news story ko feature kar sakta hai.',
  Psst: 'Kisi ki tawajjoh lene ke liye dheemi awaaz mein “psst” kaha ja sakta hai.',
  Grunting: 'Wazan uthate waqt koi shakhs chhoti grunting awaaz nikal sakta hai.',
  Chuckling: 'Dost ki halki si mazaahiya baat par chuckling ho sakti hai.',
  Atheist: 'Aik atheist kehta hai ke woh kisi god par yaqeen nahi rakhta.',
  Agnostic: 'Aik agnostic kehta hai ke God ke wajood ka yaqini ilm usay nahi.',
  Sporadically: 'Internet connection sporadically disconnect ho to woh kabhi kabhar, ghair-muqarrar waqt par toot raha hai.',
  Dictate: 'Teacher ne kaha, “Main sentence bolunga aur tum apni notebook mein dictate ki hui baat likhna.”',
  Disposal: 'Old files ko safe disposal ke liye recycle bin se bhi permanently delete karna par sakta hai.',
  Sparingly: 'Recipe mein chili flakes sparingly daalein, misal ke taur par sirf aik chutki.',
  Pseudo: '`pseudo-code` program ka jhoota code nahi, balkeh logic samjhane wali informal notation hai.',
  Sophisticated: 'Sophisticated search tool filters aur ranking use karke relevant results dhoondta hai.',
  Catalyst: 'Naya payment option online sales mein izafa karne ka catalyst bana.',
  Hindrance: 'Slow internet video meeting ke liye hindrance ban sakta hai.',
  'Freaked out': 'Unexpected error dekh kar woh pehle freaked out hua, phir logs check karke masla hal kiya.',
  Sacrifice: 'Aapke phrase “it’s dead from my side” ko personal yaad-dihani ke taur par rakhein. Aam example: exam ki tayari ke liye us ne aik shaam gaming ka waqt sacrifice kiya.',
  'Browser extension / plug-in': 'Password manager ki browser extension login form mein saved credentials bhar sakti hai; Foodpanda phone app hai, browser extension nahi.',
  Cache: 'Browser cached logo dobara use karke page ko tez khol sakta hai; visited pages ki history alag list hoti hai.',
  'Default import': '`import client from "./client.js"` mein module ka default export `client` naam se milta hai.',
  Configure: 'Developer app ko port 3000 par chalane ke liye uski setting configure karta hai.',
  Alias: '`import { formatDate as format } from "./dates.js"` mein `format` imported function ka alias hai.',
  'Vite aur React': 'React components banata hai; Vite `npm run dev` se dev server aur production build chala sakta hai.',

  'BIOS aur UEFI': 'Naya PC aam tor par UEFI firmware se boot hota hai.',
  TPM: 'Windows device TPM mein BitLocker recovery se mutaliq key material protect kar sakta hai.',
  'System firewall': 'Laptop firewall public Wi-Fi par anjaan inbound connection block kar sakta hai.',
  'Hosts file': 'Test ke liye hosts file `example.test` ko `127.0.0.1` par point kar sakti hai.',
  'Router / network gateway': 'Ghar ka router phone ke packets ko local Wi-Fi se internet ki taraf forward karta hai.',
  'Enterprise firewall aur DPI': 'Company firewall malware wali traffic ko policy ke mutabiq block kar sakta hai.',
  VPN: 'Full-tunnel VPN mein laptop ka web traffic pehle VPN server ke encrypted tunnel se guzarta hai.',
  Proxy: 'Browser forward proxy se request bhej sakta hai; server ko proxy ka IP nazar aata hai.',
  'DNS aur DNS resolver': 'Resolver `facebook.com` ke A/AAAA records pooch kar us ka IP address dhoondta hai.',
  HTTPS: 'Login form ka data browser se website tak HTTPS/TLS connection par jata hai.',
  'HTTPS, TLS aur SSL': 'Browser `https://example.com` kholte waqt TLS certificate verify karta hai.',
  'Universal override chain nahi': 'VPN tunnel active ho tab bhi device firewall kisi app ki connection block kar sakta hai.',
  'VPN “sab par haavi” nahi hota': 'Split-tunnel VPN sirf company network ke routes tunnel karta hai; baqi traffic seedha ja sakta hai.',
  'Yaad rakhne ka seedha tareeqa': 'Naam DNS dhoondta hai, router packet bhejta hai, firewall rule lagata hai aur TLS connection encrypt karta hai.',

  CPU: 'App kholte waqt CPU us ke instructions process karta hai.',
  GPU: 'Game chalate waqt GPU screen par frames render karta hai.',
  HDD: 'HDD ke magnetic platter par photo files store ho sakti hain.',
  OS: 'Windows operating system apps ko memory aur files access karne deta hai.',
  PC: 'Ghar ka desktop PC documents aur browser chalata hai.',
  PSU: 'PSU computer ke components ko required power deti hai.',
  RAM: 'Browser mein tabs kholne par unka active data RAM mein rehta hai.',
  ROM: 'Device ka boot firmware non-volatile ROM-type memory mein reh sakta hai.',
  SSD: 'SSD se laptop mein project files tezi se load hoti hain.',
  UPS: 'Bijli band ho to UPS desktop ko kuch dair backup power deti hai.',
  AI: 'Photo app AI se tasveer mein chehray pehchan sakti hai.',
  CLI: 'Terminal mein `npm run build` CLI command ki misaal hai.',
  CMS: 'Editor CMS mein blog post likh kar publish kar sakta hai.',
  DBMS: 'DBMS database mein customer records save aur query karta hai.',
  GA4: 'GA4 website par page_view event record kar sakta hai.',
  GUI: 'Settings app ke buttons aur menus GUI ki misaal hain.',
  HLL: 'Python mein `total = price * quantity` high-level code hai.',
  IDE: 'Developer IDE mein code likh kar debugger se errors dhoondta hai.',
  LLL: 'Assembly mein register instruction likhna low-level programming ki misaal hai.',
  ML: 'Email filter ML se spam ke patterns seekh sakta hai.',
  PR: 'Developer feature branch ko main mein merge karne ke liye PR kholta hai.',
  RDBMS: 'PostgreSQL RDBMS mein orders aur customers related tables ho sakte hain.',
  RLS: 'RLS policy har user ko sirf us ke apne orders dikhati hai.',
  SDK: 'Mobile SDK app ko push notifications bhejne ke tools de sakta hai.',
  SQL: '`SELECT name FROM users;` SQL query ki misaal hai.',
  UI: 'Login screen ke fields aur buttons app ki UI hain.',
  UX: 'Form ko kam steps mein mukammal karna behtar UX ki misaal hai.',
  CSS: 'CSS se page heading ka rang green kiya ja sakta hai.',
  DNS: 'DNS `example.com` ko us ke server address se resolve karta hai.',
  HTML: '`<h1>Welcome</h1>` HTML heading ki misaal hai.',
  MAC: 'Wi-Fi router local network par device ke MAC address ko dekh sakta hai.',
  TCP: 'File download TCP par ordered bytes ke taur par aa sakta hai.',
  UDP: 'Live voice call UDP use kar sakti hai taa ke delay kam rahe.',
  URI: '`mailto:help@example.com` URI ki aik misaal hai.',
  URL: '`https://example.com/about` kisi page ka URL hai.',
  VPN: 'Remote worker VPN se company ke private network tak secure connection banata hai.',
  WWW: 'Browser mein linked web pages kholna World Wide Web use karna hai.',
  '2FA': 'Bank login password ke baad authenticator code bhi mang sakta hai.',
  ABAC: 'Policy sirf HR department ke manager ko salary record dekhne deti hai.',
  AJAX: 'Search box bina page reload kiye server se suggestions mangwata hai.',
  ASI: 'JavaScript parser `const count = 3` ke baad semicolon khud samajh sakta hai.',
  CJS: 'Node.js file `const fs = require("node:fs")` se CJS module load karti hai.',
  CORS: 'Browser cross-origin API response tabhi deta hai jab server CORS allow kare.',
  CRLF: 'Windows text file mein har line CRLF se end ho sakti hai.',
  CRUD: 'Contacts app contact create, read, update aur delete karne deti hai.',
  DRY: 'Date validation aik helper mein rakhna DRY approach hai.',
  'ES Modules': '`import { readFile } from "node:fs"` ES module syntax hai.',
  FIFO: 'Queue mein pehle aaya print job pehle print hota hai.',
  IIFE: '`(() => startApp())()` foran chalne wali IIFE ki misaal hai.',
  ISR: 'News page ko har kuch minutes baad dobara generate karna ISR ki misaal hai.',
  JWT: 'Login ke baad server signed JWT ko API request mein verify kar sakta hai.',
  LIFO: 'Stack mein aakhri rakha plate pehle uthaya jata hai.',
  OAuth: 'Calendar app OAuth consent ke baad user ke calendar ka limited access leti hai.',
  PAT: 'Git CLI private repository tak PAT se authenticate kar sakta hai.',
  PHP: 'PHP server request par HTML response tayyar kar sakta hai.',
  PWA: 'Offline checklist app ko home screen par PWA ki tarah install kiya ja sakta hai.',
  REST: 'REST API mein `GET /users/42` user record mang sakta hai.',
  SSG: 'Company ka stable About page build time par SSG se ban sakta hai.',
  SSR: 'Personalized dashboard request par SSR se render ho sakta hai.',
  VCS: 'Git VCS har commit ke saath code history record karta hai.',
  XSS: 'User input ko escape karna stored XSS se bachane mein madad karta hai.',
  XAMPP: 'Developer XAMPP par local PHP site test kar sakta hai.',
  XHTML: 'XHTML document mein tags ko properly close karna hota hai.',
  XML: '`<user><name>Ana</name></user>` XML data ki misaal hai.',
  Yarn: '`yarn add react` project mein package install karta hai.',
  AAC: 'Phone recording ko AAC mein compress karke share kiya ja sakta hai.',
  AMR: 'Purani mobile voice recording AMR codec mein save ho sakti hai.',
  APNG: 'Animated loading indicator APNG image ke taur par dikh sakta hai.',
  'AT&T': 'AT&T United States mein mobile aur broadband services deti hai.',
  ATM: 'Customer bank card se ATM par cash nikalta hai.',
  AVIF: 'Website product photo ko chhoti AVIF image mein serve kar sakti hai.',
  CD: 'Purani music album audio CD par record hoti thi.',
  CDMA: 'CDMA mobile network users ko mukhtalif codes se separate karta tha.',
  DRAM: 'Computer ki main memory aam tor par DRAM chips se banti hai.',
  DVD: 'Film DVD par video aur audio ke saath store ho sakti hai.',
  EEPROM: 'Router EEPROM mein settings ko power band honay ke baad bhi rakh sakta hai.',
  EPROM: 'Purane circuit board mein EPROM ko UV light se erase karke dobara program kiya jata tha.',
  FDD: 'Floppy disk ko FDD mein daal kar purani files read ki jati thin.',
  FTP: 'Admin FTP client se server par website files transfer kar sakta hai.',
  GIF: 'Chat mein chhoti looping animation GIF ke taur par share hoti hai.',
  GPS: 'Phone GPS satellites se location ka andaza lagata hai.',
  GSM: 'GSM phone SIM ke zariye 2G cellular network par register hota hai.',
  HDMI: 'Laptop HDMI cable se monitor par video aur audio bhejta hai.',
  IC: 'Charger ke andar IC current ko control kar sakta hai.',
  JAR: 'Java app ki classes aur resources aik `.jar` archive mein pack ho sakte hain.',
  JPEG: 'Camera photo aksar `.jpg` ya `.jpeg` file mein save karta hai.',
  Kbps: 'Voice connection 64 Kbps ki data rate par chal sakta hai.',
  Mbps: 'Internet plan 100 Mbps download speed advertise kar sakta hai.',
  NVMe: 'NVMe SSD PCIe interface se computer mein bohat tezi se data read karta hai.',
  PDF: 'Invoice ko layout barqarar rakhne ke liye PDF mein bheja jata hai.',
  PIN: 'Phone unlock karne ke liye user 6-digit PIN enter karta hai.',
  PROM: 'Factory device ka fixed startup code PROM mein program ho sakta hai.',
  SIM: 'SIM mobile network ko subscriber account pehchanne mein madad deta hai.',
  SMS: 'Bank one-time alert SMS se bhej sakta hai.',
  UMTS: 'UMTS 3G phone ko mobile data connection deta tha.',
  VGA: 'Purana projector VGA cable se laptop ka display leta hai.',
  VRAM: 'High-resolution game ke textures GPU ki VRAM mein load hote hain.',
  VRM: 'Motherboard VRM CPU ko stable voltage supply karta hai.',
  '3G': '3G phone par maps aur basic web pages mobile data se khul sakte hain.',
  '3GPP': '3GPP working groups mobile network standards par kaam karte hain.',
  '3GP': 'Purana phone video clip ko `.3gp` container mein save kar sakta hai.',
  AKA: '“Ayesha, aka Ash” likhne se us ka doosra naam pata chalta hai.',
  BBC: 'BBC apni website par news aur radio programs publish karta hai.',
  BMW: 'BMW aik car model ko sedan ya SUV ke taur par sell karti hai.',
  BRB: 'Chat mein “BRB, chai le kar aata hoon” likha ja sakta hai.',
  BTW: '“BTW, meeting 3 baje hai” mein BTW extra baat introduce karta hai.',
  DIY: 'Shelf khud assemble karna DIY project ki misaal hai.',
  FAQ: 'Password reset page par common sawalon ka FAQ diya ja sakta hai.',
  FYI: '“FYI, report upload ho gayi hai” sirf information share karta hai.',
  GMT: 'News schedule 12:00 GMT ka waqt de sakta hai.',
  IBM: 'IBM enterprise customers ko cloud aur computing products deti hai.',
  IDC: '“IDC which color, tum choose kar lo” chat mein IDC ka istemaal hai.',
  IDK: '“IDK, kal ka weather check karna hoga” mein IDK uncertainty dikhata hai.',
  IG: '“IG we can leave now” mein IG ka matlab “I guess” hai.',
  IQ: 'IQ test ke result ko score ki surat mein report kiya ja sakta hai.',
  IRL: 'Online group ke dost conference mein IRL mil sakte hain.',
  JK: '“Main tumhara cake kha gaya—JK!” mazaq ko clear karta hai.',
  LASER: 'Barcode scanner product code par laser beam daalta hai.',
  LMK: '“Time confirm ho to LMK” ka matlab mujhe bata dena hai.',
  LOL: 'Mazaahiya message par reply mein “LOL” likha ja sakta hai.',
  LTS: 'Server team stable LTS release ko production mein use kar sakti hai.',
  MIPS: 'Processor benchmark purane comparison mein MIPS score dikha sakta hai.',
  NFT: 'Artist digital artwork se linked NFT mint kar sakta hai; copyright alag ho sakta hai.',
  NSA: 'NSA United States ka signals-intelligence aur cybersecurity agency hai.',
  OCD: 'OCD ke diagnosis ke liye qualified clinician symptoms aur daily impact assess karta hai.',
  POV: '“POV: tum exam se pehle notes dhoond rahe ho” video ka perspective set karta hai.',
  RIP: 'Memorial post mein “RIP” wafat par afsos ka izhar karta hai.',
  RTS: 'RTS game mein player real time par units aur resources control karta hai.',
  SMH: '“Phir se bus miss ho gayi, SMH” mayoosi dikhata hai.',
  SOS: 'Ship radio par Morse signal `... --- ...` emergency call ho sakta hai.',
  TBD: 'Event ka venue baad mein confirm ho to schedule mein “TBD” likhte hain.',
  TBH: '“TBH, mujhe pehla design zyada pasand aya” apni rai batata hai.',
  UNICEF: 'UNICEF bachon ki sehat aur taleem ke programs support karta hai.',
  UTC: 'Server logs `2026-10-28 12:00 UTC` mein timestamp rakh sakte hain.',
  VIP: 'Concert venue VIP guest ke liye alag seating rakh sakta hai.',
  W3C: 'W3C web standards aur accessibility guidelines publish karta hai.',
  WRT: '“WRT your question, report mein jawab hai” WRT ka istemaal hai.',
  'ZIP code': 'US delivery form mein customer apna 5-digit ZIP code enter karta hai.',
  Bun: 'Developer `bun install` se project ki dependencies install karta hai.',
  CRON: 'CRON job roz raat 2 baje database backup chala sakti hai.',
  HEAD: 'Git branch par `HEAD` aam tor par current commit ko point karta hai.',
  ISO: 'Camera ISO 100 par kam roshni mein ISO 800 se zyada slow exposure le sakta hai.',
  'Wi-Fi': 'Phone Wi-Fi se ghar ke wireless router ko connect hota hai.',
  'SQL keywords': '`SELECT name FROM users` mein SELECT aur FROM SQL keywords hain.',
  'YAHOO!': 'Yahoo! search engine aik brand name hai; us ka backronym asal expansion nahi.',
  'LAST-ACT-B': 'Code review mein LAST-ACT-B mnemonic se operators ki categories yaad ki ja sakti hain.',
  'Bit aur byte': '1 byte mein 8 bits hote hain; text file ka size bytes mein dikh sakta hai.',
  'KB aur KiB': '1 KB 1,000 bytes hai, jab ke 1 KiB 1,024 bytes hai.',
  'Binary size conversions': '1 MiB mein 1,024 KiB hote hain; isi liye binary storage count alag hota hai.',
  'AOSP': 'Android developer AOSP source code se platform ka open-source hissa dekh sakta hai.',
  CTA: '“Create account” button user ko action lene ki CTA deta hai.',
  DAC: 'File owner DAC permission se aik colleague ko read access de sakta hai.',
  GIN: 'PostgreSQL GIN index JSONB document ke andar key ko jaldi dhoond sakta hai.',
  ID: 'Database row ka `user_id` us record ko pehchanne wala ID hai.',
  JS: 'Browser JavaScript (JS) chala kar button click ka response de sakta hai.',
  JSONB: 'PostgreSQL JSONB column mein `{"status":"paid"}` store ho sakta hai.',
  JSX: 'React component `return <h1>Hello</h1>` ke zariye JSX render karta hai.',
  LLM: 'LLM user ke sawal ka jawab draft kar sakta hai.',
  NASA: 'NASA spacecraft launch aur scientific research missions chalata hai.',
  NLU: 'Voice assistant “kal ka mausam” se weather intent pehchan sakta hai.',
  ROAS: 'Agar ad par 100 rupay lage aur attributed sale 500 rupay ho, ROAS 5x hai.',
  DOS: 'DOS command line par `dir` se disk ki files list ki ja sakti hain.',
  DPI: 'Enterprise DPI policy malware signature wali traffic ko rok sakti hai.',
  HOF: 'Project document mein “HOF Pack” company ke liye project-specific label hai.',
  HR: 'HR team new employee ki onboarding arrange karti hai.',
  IVR: 'Phone par “sales ke liye 1 dabayen” IVR prompt hai.',
  'MS-DOS': 'Purana PC MS-DOS prompt par `dir` command chala sakta tha.',
  NAT: 'Home router private device address ko internet par public address se map karta hai.',
  NT: 'Windows XP, Windows NT family ke baad ka consumer release tha.',
  QUIC: 'HTTP/3 connection QUIC transport ke upar chal sakta hai.',
  SOCKS: 'Developer SOCKS proxy configure karke app ki network connection relay kar sakta hai.',
  SSL: 'Modern browser purane SSL ke bajaye TLS connection use karta hai.',
  TLS: 'Browser aur website TLS handshake ke baad encrypted HTTPS data exchange karte hain.',
  TPM: 'Windows BitLocker startup par TPM ke zariye platform state check kar sakta hai.',
  UEFI: 'Naya laptop UEFI Boot Manager se OS loader shuru karta hai.',
  'Windows Me': 'Windows Me ko Windows Millennium Edition bhi kaha jata tha.',
  'Windows XP': 'Windows XP ke naam mein XP “eXPerience” ko represent karta tha.',
  ':has() selector': '`label.card:has(input[type="radio"]:checked)` checked radio wali label card ko select karta hai.',
  'Hover ke baghair siblings': '`.container:hover > :not(:hover) { opacity: .5; }` baqi direct cards ko halka karta hai.',
  'CSS Grid centering': '`.box { display: grid; place-items: center; }` box ke content ko beech mein rakhta hai.',
  'Flexbox centering': '`.row { display: flex; justify-content: center; align-items: center; }` item ko center karta hai.',
  'Position centering': 'Modal ko parent ke beech lane ke liye `top/left: 50%` aur `translate(-50%, -50%)` use karein.',
  'Media query': '`@media (max-width: 520px) { .panel { width: 100%; } }` narrow screen par style badalti hai.',
  'Media types': '`@media print { nav { display: none; } }` print copy mein navigation chhupa sakta hai.',
  'Media features': '`@media (prefers-reduced-motion: reduce)` animation kam karne ki user preference check karta hai.',
  Breakpoint: 'Agar 700px par cards tang hon to us width par 2-column se 1-column layout kar dein.',
  Orientation: '`@media (orientation: landscape)` mein wide screen ke liye side-by-side layout diya ja sakta hai.',
  'Iteration aur list traversal': '`for (const name of names) { console.log(name); }` array ki har value par chalta hai.',
  Recursion: '`factorial(4)` khud ko 3, 2, 1 tak call karke `24` return karta hai.',
  'Object reference aur equality': '`const b = a; a === b` true hota hai; naya `{}` banane par reference alag hota hai.',
  'UTF-16': 'JavaScript mein `"A".length` 1 hai, jab ke `"😀".length` 2 UTF-16 code units hai.',
  CSMA: 'Wi-Fi device channel busy sunay to CSMA/CA ke tehat transmit karne se pehle wait karta hai.',
  LPDDR: 'Smartphone ki RAM LPDDR memory se kam battery power use kar sakti hai.',
  CAPTCHA: 'Sign-up form CAPTCHA challenge se automated bot submissions rokne ki koshish karta hai.',
  MVC: 'Shopping app mein Controller request leta, Model product data laata aur View page dikhata hai.',
  SERP: '“weather Lahore” search karne par results wala page SERP hai.',
  VLM: 'VLM ko plant ki photo de kar poocha ja sakta hai ke yeh kaunsa poda hai.',
  IDL: 'IDL file `getUser(id)` service operation aur uske input/output types describe kar sakti hai.',
  SCI: 'Release checklist mein `server.mjs` ko SCI ke taur par version aur track kiya ja sakta hai.',
  WASM: 'Photo editor ka image-processing module browser-compatible runtime mein Wasm ke taur par chal sakta hai.',
};

function getGlossaryExample(item) {
  if (item.example) return item.example;
  if (item.term === 'LPA') {
    return item.detail.startsWith('Lakh Per Annum')
      ? 'Misal: 12 LPA salary ka matlab aam tor par saal ke 12 lakh rupay hota hai.'
      : 'Misal: LPA document kisi trusted shakhs ko mustaqbil ke legal ya financial faislon ki authority de sakta hai.';
  }
  return glossaryExamples[item.term] || '';
}

function escapeGlossaryExample(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getSafeExternalHref(value) {
  if (!value) return '';
  try {
    const parsed = new URL(value);
    return ['http:', 'https:'].includes(parsed.protocol) && !parsed.username && !parsed.password
      ? escapeGlossaryExample(parsed.href)
      : '';
  } catch {
    return '';
  }
}

function saveCurrentView() {
  try {
    localStorage.setItem(viewStorageKey, JSON.stringify({
      department: activeDepartment,
      chapterTitle: departments[activeDepartment].chapters[activeChapter]?.title,
      resourceCategoryIndex: activeResourceCategory,
    }));
  } catch {
    // The app still works if browser storage is unavailable.
  }
}

function updateChapterScrollHint() {
  const canScrollHorizontally = chapterList.scrollWidth > chapterList.clientWidth + 2;
  const isAtEnd = chapterList.scrollLeft + chapterList.clientWidth >= chapterList.scrollWidth - 2;
  chapterRail.classList.toggle('has-horizontal-scroll', canScrollHorizontally);
  chapterRail.classList.toggle('horizontal-scroll-end', isAtEnd);
}

chapterList.addEventListener('scroll', updateChapterScrollHint, { passive: true });
window.addEventListener('resize', updateChapterScrollHint);

function updateDepartmentScrollHint() {
  if (!departmentTabs || !departmentTabsShell) return;
  const needsScroll = departmentTabs.scrollWidth > departmentTabs.clientWidth + 2;
  const atEnd = departmentTabs.scrollLeft + departmentTabs.clientWidth >= departmentTabs.scrollWidth - 2;
  departmentTabsShell.classList.toggle('can-scroll', needsScroll && !atEnd);
}

departmentTabs?.addEventListener('scroll', updateDepartmentScrollHint, { passive: true });
window.addEventListener('resize', updateDepartmentScrollHint);

tabs.forEach((tab) => {
  const count = departments[tab.dataset.department].chapters.length;
  tab.querySelector('.tab-count').textContent = String(count).padStart(2, '0');
});

function visibleChapters() {
  const chapters = departments[activeDepartment].chapters
    .map((chapter, index) => ({ chapter, index }))
  return activeDepartment === 'types'
    ? chapters
    : chapters.sort((a, b) => chapterTitleCollator.compare(a.chapter.title, b.chapter.title));
}

function activeChapterPosition() {
  return visibleChapters().findIndex(({ index }) => index === activeChapter) + 1;
}

function selectChapter(index, shouldScroll = false, hoverTriggered = false) {
  if (activeChapter !== index) {
    if (hoverTriggered) ignoreChapterHoverUntilPointerMoves = true;
    activeChapter = index;
    saveCurrentView();
    renderChapters();
  }
  if (shouldScroll && window.matchMedia('(max-width: 520px)').matches) {
    lessonCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderChapters() {
  const chapters = visibleChapters();
  const previousMenuScrollTop = chapterList.scrollTop;
  chapterCount.textContent = `${String(chapters.length).padStart(2, '0')} ${chapters.length === 1 ? 'CHAPTER' : 'CHAPTERS'}`;
  chapterList.replaceChildren();

  if (chapters.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty-state';
    empty.textContent = 'No chapters found.';
    chapterList.append(empty);
    renderLesson(null);
    return;
  }

  if (!chapters.some(({ index }) => index === activeChapter)) activeChapter = chapters[0].index;

  chapters.forEach(({ chapter, index }, menuIndex) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `chapter-button${index === activeChapter ? ' active' : ''}`;
    button.dataset.chapterIndex = index;
    button.setAttribute('aria-current', index === activeChapter ? 'true' : 'false');
    button.innerHTML = `<span class="chapter-number">${String(menuIndex + 1).padStart(2, '0')}</span><span>${chapter.title}</span><span class="chapter-arrow" aria-hidden="true">›</span>`;
    button.addEventListener('mouseenter', () => {
      if (!ignoreChapterHoverUntilPointerMoves) {
        scheduleHover('chapter', () => {
          if (!ignoreChapterHoverUntilPointerMoves) selectChapter(index, false, true);
        });
      }
    });
    button.addEventListener('focus', () => selectChapter(index));
    button.addEventListener('click', () => {
      cancelHover('chapter');
      selectChapter(index, true);
    });
    chapterList.append(button);
  });

  chapterList.onmouseleave = () => cancelHover('chapter');
  if (revealRestoredChapter) {
    chapterList.querySelector(`[data-chapter-index="${activeChapter}"]`)?.scrollIntoView({ block: 'start' });
    revealRestoredChapter = false;
  } else {
    chapterList.scrollTop = previousMenuScrollTop;
  }
  renderLesson(departments[activeDepartment].chapters[activeChapter]);
  saveCurrentView();
  requestAnimationFrame(updateChapterScrollHint);
}

function renderLesson(chapter) {
  lessonCard.classList.remove('lesson-enter');
  void lessonCard.offsetWidth;
  lessonCard.classList.add('lesson-enter');
  if (!chapter) {
    lessonCard.innerHTML = '<div class="empty-state"><strong>Nothing matched that search.</strong>Try another word or clear your search to see every chapter.</div>';
    return;
  }

  const chapters = departments[activeDepartment].chapters;
  const nextIndex = (activeChapter + 1) % chapters.length;
  if (chapter.checklistSections) {
    const savedChecks = readJourneyChecklist();
    const checklistTotal = chapter.checklistSections.reduce((total, section) => total + section.items.length, 0);
    const checklistMarkup = chapter.checklistSections.map((section, sectionIndex) => `
      <section class="journey-checklist-section">
        <div class="glossary-section-heading"><span>${String(sectionIndex + 1).padStart(2, '0')}</span><h4>${escapeGlossaryExample(section.title)}</h4><small>${section.items.length} ITEMS</small></div>
        <div class="journey-checklist-grid">${section.items.map((name) => {
          const key = encodeURIComponent(`${chapter.title}|${section.title}|${name}`);
          const checked = savedChecks[key] === true;
          return `<label class="journey-check-item${checked ? ' checked' : ''}"><input type="checkbox" data-journey-key="${key}"${checked ? ' checked' : ''}><span>${escapeGlossaryExample(name)}</span></label>`;
        }).join('')}</div>
      </section>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div>
      <h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
      ${chapter.includesNormal ? '<button class="journey-normal-link" type="button" data-journey-normal>Normal essentials ki checklist bhi dekhein →</button>' : ''}
      <div class="journey-checklist">${checklistMarkup}</div>
      <div class="lesson-bottom"><span class="lesson-bottom-label">${checklistTotal} CHECKLIST ITEMS · SAVED ON THIS DEVICE</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelectorAll('[data-journey-key]').forEach((input) => {
      input.addEventListener('change', () => {
        const checks = readJourneyChecklist();
        if (input.checked) checks[input.dataset.journeyKey] = true;
        else delete checks[input.dataset.journeyKey];
        writeJourneyChecklist(checks);
        input.closest('.journey-check-item')?.classList.toggle('checked', input.checked);
      });
    });
    lessonCard.querySelector('[data-journey-normal]')?.addEventListener('click', () => {
      const normalIndex = chapters.findIndex((item) => item.title === 'Normal');
      if (normalIndex >= 0) { activeChapter = normalIndex; renderChapters(); }
    });
    lessonCard.querySelector('.next-button').addEventListener('click', () => { activeChapter = nextIndex; renderChapters(); });
    return;
  }
  if (chapter.windowsTimeline) {
    const timelineItems = chapter.windowsTimeline.map((item) => `
      <li class="windows-timeline-item">
        <span class="windows-timeline-year">${item.year}</span>
        <article class="windows-timeline-card"><h4>${item.version}</h4><p>${item.detail}</p></article>
      </li>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div>
      <h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
      <ol class="windows-timeline" aria-label="Windows release timeline">${timelineItems}</ol>
      <div class="lesson-bottom"><span class="lesson-bottom-label">${chapter.timelineFooter}</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => { activeChapter = nextIndex; renderChapters(); });
    return;
  }
  if (chapter.nameLists) {
    const nameCount = chapter.nameLists.reduce((total, section) => total + section.items.length, 0);
    const nameListsMarkup = chapter.nameLists.map((section, sectionIndex) => `
      <section class="names-list-section">
        <div class="glossary-section-heading"><span>${String(sectionIndex + 1).padStart(2, '0')}</span><h4>${escapeGlossaryExample(section.title)}</h4><small>${String(section.items.length).padStart(2, '0')} NAMES</small></div>
        ${section.note ? `<p class="names-list-note">${escapeGlossaryExample(section.note)}</p>` : ''}
        <ul class="names-list-grid">${section.items.map((item) => `<li>${escapeGlossaryExample(item)}</li>`).join('')}</ul>
      </section>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${escapeGlossaryExample(chapter.concept)}</span><span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div>
      <h3>${escapeGlossaryExample(chapter.heading)}</h3><p class="definition">${escapeGlossaryExample(chapter.definition)}</p>
      <div class="names-lists">${nameListsMarkup}</div>
      <div class="lesson-bottom"><span class="lesson-bottom-label">${nameCount} LIST ITEMS · NAMES & REFERENCES</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => { activeChapter = nextIndex; renderChapters(); });
    return;
  }
  if (chapter.glossarySections) {
    activeResourceCategory = Math.min(activeResourceCategory, chapter.glossarySections.length - 1);
    const selectedSection = chapter.glossarySections[activeResourceCategory];
    const glossaryCount = chapter.glossarySections.reduce((total, section) => total + section.items.length, 0);
    const glossaryFooter = chapter.glossaryFooter || `${glossaryCount} TERMS · GROUPED BY TOPIC`;
    const categoryButtons = chapter.glossarySections.map((section, sectionIndex) => `
      <button class="glossary-category-button${sectionIndex === activeResourceCategory ? ' active' : ''}" type="button" data-resource-category="${sectionIndex}" aria-pressed="${sectionIndex === activeResourceCategory}">
        <span>${String(sectionIndex + 1).padStart(2, '0')}</span>${escapeGlossaryExample(section.title)}
      </button>`).join('');
    const glossaryMarkup = [selectedSection].map((section) => `
      <section class="glossary-section" id="resource-category-${activeResourceCategory}">
        <div class="glossary-section-heading"><span>${String(activeResourceCategory + 1).padStart(2, '0')}</span><h4>${section.title}</h4><small>${String(section.items.length).padStart(2, '0')} TERMS</small></div>
        <div class="glossary-grid">${section.items.map((item) => {
          const example = getGlossaryExample(item);
          const safeHref = getSafeExternalHref(item.url);
          const resourceLink = safeHref ? `<a class="glossary-resource-link" href="${safeHref}" target="_blank" rel="noopener noreferrer"><span>Link kholo ↗</span><code>${safeHref}</code></a>` : '';
          const termMarkup = item.original ? escapeGlossaryExample(item.term) : item.term;
          const detailMarkup = item.original ? escapeGlossaryExample(item.detail) : item.detail;
          const originalMarkup = item.original ? `<p class="glossary-original"><strong>Aapka original note:</strong> ${escapeGlossaryExample(item.original)}</p>` : '';
          return `<article class="glossary-item"><h5>${termMarkup}</h5>${originalMarkup}<p>${detailMarkup}</p>${resourceLink}${example ? `<p class="glossary-example"><strong>Misal:</strong> ${escapeGlossaryExample(example)}</p>` : ''}</article>`;
        }).join('')}</div>
      </section>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div>
      <h3>${chapter.heading}</h3>
      <p class="definition">${chapter.definition}</p>
      ${chapter.glossarySections.length > 1 ? `<div class="glossary-category-nav" aria-label="Content categories">${categoryButtons}</div>` : ''}
      <div class="glossary-content">${glossaryMarkup}</div>
      <div class="lesson-bottom"><span class="lesson-bottom-label">${glossaryFooter}</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelectorAll('.glossary-category-button').forEach((button) => {
      button.addEventListener('click', () => {
        activeResourceCategory = Number(button.dataset.resourceCategory);
        saveCurrentView();
        renderLesson(chapter);
      });
    });
    lessonCard.querySelector('.next-button').addEventListener('click', () => {
      activeChapter = nextIndex;
      renderChapters();
    });
    return;
  }

  if (chapter.architectureDevopsGuide) {
    const projectFiles = chapter.projectFiles.map((file) => `<article class="devops-file ${file.kind === 'GENERATED' ? 'generated' : ''}"><code>${file.path}</code><span>${file.kind}</span><p>${file.detail}</p></article>`).join('');
    const orgCards = chapter.organizationCards.map((card) => `<article class="devops-org-card ${card.color}"><div><span>${card.icon}</span><h5>${card.title}</h5></div><p>${card.definition}</p><small>Misalein</small><ul>${card.examples.map((example) => `<li>${example}</li>`).join('')}</ul></article>`).join('');
    const envCards = chapter.environmentFiles.map((file) => `<article class="devops-env-card ${file.color}"><div><h5>${file.title}</h5><span>${file.title === '.env.local' ? 'PRIVATE' : file.title === '.gitignore' ? 'GIT RULES' : 'SAFE TEMPLATE'}</span></div><p>${file.definition}</p><pre><code>${file.code}</code></pre></article>`).join('');
    const deploySteps = chapter.railwaySteps.map((step, index) => `<article class="railway-step ${step.color}"><div><span>${String(index + 1).padStart(2, '0')}</span><b>${step.icon}</b></div><h5>${step.title}</h5><p>${step.detail}</p></article>`).join('');
    const commands = chapter.railwayCommands.map((item) => `<div class="railway-command"><span>${item.label}</span><code>${item.command}</code></div>`).join('');
    const problems = chapter.troubleshooting.map((item) => `<article class="railway-problem ${item.color}"><div><span>${item.icon}</span><h5>${item.title}</h5></div><ul>${item.checks.map((check) => `<li>${check}</li>`).join('')}</ul>${item.note ? `<small>${item.note}</small>` : ''}</article>`).join('');
    const notes = chapter.devopsNotes.map((note, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span>${note}</li>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
      <section class="devops-organization"><div class="devops-section-heading"><span>01</span><div><h4>Project organization</h4><p>Source files alag rakhein; generated output ko source se alag samjhein.</p></div></div><div class="devops-project-root"><div class="devops-root-title"><span>▣</span><b>z-bank/ · project root</b><small>app source</small></div><div class="devops-file-tree">${projectFiles}</div></div><div class="devops-org-grid">${orgCards}</div><div class="devops-env-grid">${envCards}</div><div class="devops-env-note"><span>🔐</span><p><strong>Asli credentials ko push na karein.</strong> .env.local Git se ignore hai; .env.example mein sirf fake placeholders rakhein.</p></div></section>
      <section class="devops-railway"><div class="devops-section-heading"><span>02</span><div><h4>Deployment · Railway</h4><p>Repository connect se public domain tak ka seedha flow.</p></div><b class="railway-mark">R</b></div><div class="railway-flow">${deploySteps}</div><div class="railway-commands-panel"><div class="railway-commands-heading"><span>›_</span><div><h4>Is project ke commands</h4><p>Build pehle; server compiled dist/ ko serve karega.</p></div></div><div class="railway-commands-grid">${commands}</div><div class="railway-domain"><span>◎</span><code>https://your-service.up.railway.app</code><b>Deploy ke baad domain generate karein ↗</b></div></div><div class="railway-troubleshoot"><div class="railway-troubleshoot-title"><span>!</span><h4>Troubleshooting</h4><small>Error ke mutabiq sahi logs dekhein.</small></div><div class="railway-problem-grid">${problems}</div></div></section>
      <section class="devops-notes"><div class="devops-section-heading"><span>✓</span><div><h4>Build aur deploy ke zaroori notes</h4><p>Platform settings aur app configuration dono check karein.</p></div></div><ol>${notes}</ol></section>
      <div class="event-official-links devops-official-links"><strong>Official docs</strong><a href="https://docs.railway.com/quick-start" target="_blank" rel="noreferrer">Connect GitHub repo <span>↗</span></a><a href="https://docs.railway.com/builds/build-and-start-commands" target="_blank" rel="noreferrer">Build / start <span>↗</span></a><a href="https://docs.railway.com/variables" target="_blank" rel="noreferrer">Railway variables <span>↗</span></a><a href="https://docs.railway.com/observability/logs" target="_blank" rel="noreferrer">Build / deploy logs <span>↗</span></a></div>
      <div class="lesson-bottom"><span class="lesson-bottom-label">ORGANIZE → BUILD → START → CHECK LOGS → SHARE</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => { activeChapter = nextIndex; renderChapters(); });
    return;
  }
  if (chapter.storageBucketsGuide) {
    const storageSteps = chapter.storageSteps.map((step, index) => `<article class="storage-flow-step ${step.color}"><div><span>${String(index + 1).padStart(2, '0')}</span><b>${step.icon}</b></div><h5>${step.title}</h5><p>${step.detail}</p></article>`).join('');
    const bucketCards = chapter.storageBuckets.map((bucket) => `<article class="storage-bucket-card ${bucket.color}"><div class="storage-bucket-heading"><span>${bucket.icon}</span><div><h4>${bucket.title}</h4><p>${bucket.access}</p></div></div><div class="storage-url-card"><small>${bucket.urlLabel}</small><code>${bucket.url}</code><span>${bucket.color === 'blue' ? '↗ Public access' : '◷ Temporary access'}</span></div><div class="storage-use-cases"><b>Use cases</b>${bucket.examples.map((example) => `<span>${example}</span>`).join('')}</div><aside>${bucket.check}</aside></article>`).join('');
    const accessSteps = chapter.storageAccessSteps.map((step, index) => `<article class="storage-access-step"><div><span>${String(index + 1).padStart(2, '0')}</span><b>${step.icon}</b></div><h5>${step.title}</h5><p>${step.detail}</p></article>`).join('');
    const notes = chapter.storageNotes.map((note, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span>${note}</li>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
      <section class="storage-intro-panel"><div class="storage-section-heading"><span>01</span><div><h4>Bucket kya hota hai?</h4><p>Bucket files ka named container aur unka access model hota hai.</p></div></div><div class="storage-base64-compare"><article class="storage-base64-card"><div><span>⌁</span><h4>File ko Base64 text banana</h4></div><p>Image ya PDF ko bohat lambi encoded text value bana kar database mein rakhna aam tor par acha pattern nahi.</p><small>DB bloat · transfer heavy · file handling mushkil</small></article><div class="storage-transform" aria-hidden="true"><span>→</span><b>behtar pattern</b></div><article class="storage-object-card"><div><span>▤</span><h4>File ko Storage bucket mein</h4></div><div class="storage-object-flow"><b>File / object storage</b><i aria-hidden="true">→</i><b>Path + metadata in Postgres</b></div><p>Actual binary file alag storage mein; database bucket/object metadata aur path ko track karta hai.</p></article></div><div class="storage-flow-panel"><div class="storage-flow-heading"><span>↳</span><div><h4>Upload se URL tak</h4><p>Files aur metadata alag jagah rehte hain, magar app unhein aik Storage API se manage karti hai.</p></div></div><div class="storage-flow-grid">${storageSteps}</div></div></section>
      <section class="storage-buckets-panel"><div class="storage-section-heading"><span>02</span><div><h4>Public vs Private buckets</h4><p>Privacy bucket setting aur object par lagne wali policy se tay hoti hai.</p></div></div><div class="storage-buckets-grid">${bucketCards}</div></section>
      <section class="storage-signed-panel"><div class="storage-section-heading"><span>03</span><div><h4>Signed URL · private file ka temporary link</h4><p>Pehle user ki permission check; phir limited waqt ke liye link dein.</p></div></div><div class="storage-access-flow">${accessSteps}</div><div class="storage-code-layout"><div><div class="storage-code-heading"><span>JS</span><div><h4>60-second signed URL</h4><p>Expiry seconds mein hoti hai. Apne app ke user-session client aur Storage RLS use karein.</p></div></div><pre><code>${chapter.signedUrlCode}</code></pre></div><aside><span>◷</span><h4>Temporary gate pass</h4><p>Link khud permission ko replace nahi karta: link banane se pehle policy se verify karein ke user is file ka haqdar hai.</p><small>URL mila → expiry se pehle access</small></aside></div></section>
      <section class="storage-notes-panel"><div class="storage-section-heading"><span>✓</span><div><h4>Security aur storage notes</h4><p>Public access, RLS aur database metadata ko alag alag samjhein.</p></div></div><ol>${notes}</ol></section>
      <div class="event-official-links storage-official-links"><strong>Supabase official docs</strong><a href="https://supabase.com/docs/guides/storage/buckets/fundamentals" target="_blank" rel="noreferrer">Bucket access <span>↗</span></a><a href="https://supabase.com/docs/guides/storage/security/access-control" target="_blank" rel="noreferrer">Storage RLS <span>↗</span></a><a href="https://supabase.com/docs/guides/storage/schema/design" target="_blank" rel="noreferrer">File metadata <span>↗</span></a><a href="https://supabase.com/docs/guides/storage/serving/downloads" target="_blank" rel="noreferrer">Public / signed URLs <span>↗</span></a></div>
      <div class="lesson-bottom"><span class="lesson-bottom-label">UPLOAD → POLICY CHECK → STORE → SHARE SAFELY</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => { activeChapter = nextIndex; renderChapters(); });
    return;
  }
  if (chapter.frontendBackendGuide) {
    const breakpoints = chapter.responsiveSteps.map((step, index) => `<article class="fb-breakpoint-card"><div><span>${String(index + 1).padStart(2, '0')}</span><b>${step.name}</b><small>${step.width}</small></div><code>${step.example}</code><p>${step.detail}</p></article>`).join('');
    const envCards = chapter.envFiles.map((file) => `<article class="fb-env-card ${file.color}"><div class="fb-card-heading"><span>▤</span><div><h5>${file.title}</h5><small>${file.badge}</small></div></div><p>${file.detail}</p><pre><code>${file.code}</code></pre></article>`).join('');
    const cmsCards = chapter.cmsTypes.map((item) => `<article class="fb-cms-card ${item.color}"><div class="fb-cms-heading"><span>${item.icon}</span><div><h5>${item.title}</h5><small>${item.flow}</small></div></div><p>${item.definition}</p><div class="fb-chip-list">${item.examples.map((example) => `<span>${example}</span>`).join('')}</div></article>`).join('');
    const connectionParts = chapter.connectionParts.map((part, index) => `<article class="fb-connection-part"><span>${String(index + 1).padStart(2, '0')}</span><div><h5>${part.label}</h5><code>${part.example}</code><p>${part.note}</p></div></article>`).join('');
    const authSteps = chapter.authSteps.map((step, index) => `<article class="fb-auth-step ${step.color}"><div class="fb-auth-node"><span>${String(index + 1).padStart(2, '0')}</span><b>${step.icon}</b></div><h5>${step.title}</h5><p>${step.detail}</p></article>`).join('');
    const packageCards = chapter.packageTools.map((tool) => `<article class="fb-package-card ${tool.color}"><div class="fb-package-heading"><b>${tool.name}</b><span>${tool.role}</span></div><p>${tool.detail}</p><code>${tool.command}</code></article>`).join('');
    const notes = chapter.frontendNotes.map((note, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span>${note}</li>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
      <section class="fb-section fb-responsive"><div class="fb-section-heading"><span>01</span><div><h4>Frontend · responsive Tailwind</h4><p>Mobile se shuru karein, phir screen bari hone par layout upgrade karein.</p></div><b class="fb-section-icon">▱</b></div><div class="fb-breakpoint-flow">${breakpoints}</div><div class="fb-responsive-example"><div><strong>Class example</strong><p>Text mobile par chhota, medium par bara, large par aur bara.</p></div><pre><code>&lt;p class="text-sm md:text-base lg:text-lg"&gt;\n  Hello World\n&lt;/p&gt;</code></pre></div><div class="fb-grid-demo"><div class="fb-grid-title"><span>12-column grid</span><small>Har row ke total spans = 12</small></div><div class="fb-grid-track"><span style="grid-column:span 12">col-span-12 · full row</span><span style="grid-column:span 6">col-span-6</span><span style="grid-column:span 6">col-span-6</span><span style="grid-column:span 4">col-span-4</span><span style="grid-column:span 4">col-span-4</span><span style="grid-column:span 4">col-span-4</span></div></div></section>
      <section class="fb-section fb-env-section"><div class="fb-section-heading"><span>02</span><div><h4>.env files · secrets · Git</h4><p>Asli values private rakhein; team ko variable names safe template se dikhayein.</p></div><b class="fb-section-icon">⌑</b></div><div class="fb-env-grid">${envCards}</div><div class="fb-env-rule"><span>🔒</span><div><strong>Secret key browser mein nahi.</strong><p>Next.js mein <code>NEXT_PUBLIC_</code> prefix wali values browser bundle mein aa sakti hain. Supabase secret key ko kabhi is prefix ke saath na rakhein.</p></div></div></section>
      <section class="fb-section fb-cms-section"><div class="fb-section-heading"><span>03</span><div><h4>CMS · Collection vs Global</h4><p>Repeated records aur poori site par shared aik version ka farq.</p></div><b class="fb-section-icon">▦</b></div><div class="fb-cms-grid">${cmsCards}</div></section>
      <section class="fb-section fb-db-section"><div class="fb-section-heading"><span>04</span><div><h4>Supabase · PostgreSQL connection string</h4><p>Credentials server ki environment file mein rakhein; browser mein DB URL na bhejein.</p></div><b class="fb-section-icon">▤</b></div><div class="fb-db-uri"><span>postgresql://</span><b>postgres.[PROJECT_REF]</b><i>:</i><em>[YOUR_PASSWORD]</em><i>@</i><strong>[POOLER_HOST]</strong><i>:</i><mark>6543</mark><i>/</i><b>postgres</b></div><div class="fb-uri-caption"><span>USER</span><span>PASSWORD</span><span>HOST</span><span>PORT</span><span>DATABASE</span></div><div class="fb-connection-grid">${connectionParts}</div><div class="fb-connection-modes"><span><b>5432</b> shared session pooler</span><span><b>6543</b> shared transaction pooler (serverless)</span><span><b>5432</b> direct DB host / persistent backend</span></div><aside class="fb-client-note"><b>Browser app?</b> Database URI nahi. Supabase project URL + publishable key wala client use karein, aur RLS policies enable karein.</aside></section>
      <section class="fb-section fb-auth-section"><div class="fb-section-heading"><span>05</span><div><h4>Authentication flow · Supabase + Google OAuth</h4><p>Provider par consent, Supabase par verify, app ke callback par session.</p></div><b class="fb-section-icon">♙</b></div><div class="fb-auth-flow">${authSteps}</div><div class="fb-auth-details"><article><span>Google console</span><code>https://[PROJECT_REF].supabase.co/auth/v1/callback</code><p>Google provider ke authorized redirect URI mein Supabase callback set karein.</p></article><article><span>Supabase Auth settings</span><code>http://localhost:3000/auth/callback</code><p>App ke callback ko Supabase Redirect URLs allow-list mein add karein.</p></article></div><pre class="fb-auth-code"><code>await supabase.auth.signInWithOAuth({\n  provider: 'google',\n  options: { redirectTo: 'http://localhost:3000/auth/callback' }\n});</code></pre><div class="fb-auth-guard"><span>▣</span><p><strong>Access control ki do layers:</strong> Middleware protected page par login check kare; RLS database rows ki access check kare. Sirf login kaafi nahi.</p></div></section>
      <section class="fb-section fb-packages-section"><div class="fb-section-heading"><span>06</span><div><h4>JavaScript packages · grocery delivery wali misaal</h4><p>Project ko chahiye packages list se choose karo, install karo; command runner alag pehchan lo.</p></div><b class="fb-section-icon">▰</b></div><div class="fb-package-grid">${packageCards}</div><div class="fb-package-note"><span>↳</span><p><strong>npx package manager nahi.</strong> Yeh npm package ke command ko run karta hai. Bun apna runtime, package manager, test runner aur bundler bhi deta hai.</p></div></section>
      <section class="fb-notes-section"><div class="fb-section-heading"><span>✓</span><div><h4>Quick safety checklist</h4><p>Frontend UI aur backend credentials ko alag rakhein.</p></div></div><ol>${notes}</ol></section>
      <div class="event-official-links fb-official-links"><strong>Official references</strong><a href="https://tailwindcss.com/docs/responsive-design" target="_blank" rel="noreferrer">Tailwind responsive <span>↗</span></a><a href="https://nextjs.org/docs/app/guides/environment-variables" target="_blank" rel="noreferrer">Next.js env <span>↗</span></a><a href="https://supabase.com/docs/guides/getting-started/api-keys" target="_blank" rel="noreferrer">Supabase keys <span>↗</span></a><a href="https://supabase.com/docs/guides/database/connecting-to-postgres" target="_blank" rel="noreferrer">DB connections <span>↗</span></a><a href="https://supabase.com/docs/guides/auth/social-login/auth-google" target="_blank" rel="noreferrer">Google OAuth <span>↗</span></a><a href="https://docs.npmjs.com/cli/v11/commands/npm-exec" target="_blank" rel="noreferrer">npm exec / npx <span>↗</span></a><a href="https://pnpm.io/faq" target="_blank" rel="noreferrer">pnpm store <span>↗</span></a><a href="https://bun.sh/docs" target="_blank" rel="noreferrer">Bun toolkit <span>↗</span></a></div>
      <div class="lesson-bottom"><span class="lesson-bottom-label">LAYOUT → ENV → DATABASE → AUTH → PACKAGES</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => { activeChapter = nextIndex; renderChapters(); });
    return;
  }
  if (chapter.sqlJoinsGuide) {
    const sourceTables = chapter.joinTables.map((table, index) => `
      <section class="join-source-table ${index ? 'right' : 'left'}"><div class="join-source-heading"><span>${index ? 'B' : 'A'}</span><h4>${table.title}</h4><small>${table.rows.length} rows</small></div><div class="join-table-scroll"><table><thead><tr>${table.columns.map((column) => `<th>${column}</th>`).join('')}</tr></thead><tbody>${table.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section>`).join('');
    const joinCards = chapter.joinTypes.map((join, index) => `
      <article class="sql-join-card ${join.color}">
        <div class="sql-join-heading"><span class="sql-join-number">${String(index + 1).padStart(2, '0')}</span><span class="sql-join-icon" aria-hidden="true">${join.icon}</span><div><h4>${join.name}</h4><p>${join.short}</p></div></div>
        <div class="join-visual" aria-label="${join.name} ka simplified visual"><span class="join-table-node">${join.visualTables ? join.visualTables[0] : 'Students'}</span><i aria-hidden="true"></i><b>${join.icon}</b><i aria-hidden="true"></i><span class="join-table-node">${join.visualTables ? join.visualTables[1] : 'Enrollments'}</span><em aria-hidden="true">→ result</em></div>
        ${join.sourceTable ? `<div class="join-self-source"><strong>Employees ki original table</strong><div class="join-table-scroll"><table><thead><tr>${join.sourceTable.columns.map((column) => `<th>${column}</th>`).join('')}</tr></thead><tbody>${join.sourceTable.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell === 'NULL' ? '<span class="join-null">NULL</span>' : cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>` : ''}
        <pre class="join-query"><code>${join.query}</code></pre>
        <div class="join-result-wrap"><div class="join-result-label"><span>Sample result</span><small>${join.name === 'CROSS JOIN' ? '16 total · sample' : `${join.rows.length} rows`}</small></div><div class="join-table-scroll"><table><thead><tr>${join.headers.map((header) => `<th>${header}</th>`).join('')}</tr></thead><tbody>${join.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell === 'NULL' ? '<span class="join-null">NULL</span>' : cell === '…' ? '<span class="join-ellipsis">…</span>' : cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>
        <div class="join-takeaway"><span>↳</span>${join.takeaway}</div>
      </article>`).join('');
    const notes = chapter.joinNotes.map((note, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span>${note}</li>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
      <section class="join-source-panel"><div class="join-section-heading"><span>01</span><div><h4>Sample tables</h4><p>JOIN in dono tables ke student_id ko match karega.</p></div></div><div class="join-source-grid">${sourceTables}</div><div class="join-key-line"><span>Students.student_id</span><i aria-hidden="true"></i><b>same key</b><i aria-hidden="true"></i><span>Enrollments.student_id</span></div></section>
      <section class="sql-join-section"><div class="join-section-heading"><span>02</span><div><h4>Chhe JOIN types</h4><p>Query padhein, phir result mein dekhein kaun se rows bache.</p></div></div><div class="sql-join-grid">${joinCards}</div></section>
      <section class="join-notes-panel"><div class="join-section-heading"><span>03</span><div><h4>Yaad rakhne wali baatein</h4><p>NULL aur database syntax ka farq bhi check karein.</p></div></div><ol>${notes}</ol></section>
      <div class="event-official-links join-source-links"><strong>Official references</strong><a href="https://www.postgresql.org/docs/current/queries-table-expressions.html" target="_blank" rel="noreferrer">PostgreSQL JOINs <span>↗</span></a><a href="https://dev.mysql.com/doc/refman/8.0/en/join.html" target="_blank" rel="noreferrer">MySQL JOIN syntax <span>↗</span></a></div>
      <div class="lesson-bottom"><span class="lesson-bottom-label">MATCH KEY → KEEP ROWS → READ RESULT</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => { activeChapter = nextIndex; renderChapters(); });
    return;
  }
  if (chapter.eventLoopGuide) {
    const stages = chapter.loopStages.map((step, index) => `<article class="event-loop-step ${step.color}"><div><span>${String(index + 1).padStart(2, '0')}</span><b>${step.icon}</b></div><h5>${step.title}</h5><p>${step.detail}</p></article>`).join('');
    const roles = chapter.threadRoles.map((role) => `<article class="event-thread-card ${role.color}"><span>${role.icon}</span><div><h5>${role.name}</h5><p>${role.detail}</p></div></article>`).join('');
    const notes = chapter.eventLoopNotes.map((note) => `<li>${note}</li>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
      <section class="event-loop-flow-panel"><div class="event-flow-heading"><span>⟳</span><div><h4>Request se callback tak ka flow</h4><p>Jab I/O chal raha hota hai, main JS thread doosra ready kaam kar sakta hai.</p></div></div><div class="event-loop-flow">${stages}</div></section>
      <section class="event-thread-panel"><div class="event-flow-heading"><span>⌘</span><div><h4>Kaun sa hissa kya karta hai?</h4><p>“Single-threaded” ka matlab yeh nahi ke Node ke process mein sirf aik thread hi hota hai.</p></div></div><div class="event-thread-grid">${roles}</div></section>
      <div class="event-loop-bottom"><section class="event-code-panel"><div class="event-code-heading"><span>⌨</span><div><h4>Non-blocking file read</h4><p>Start aur End foran; file callback baad mein.</p></div></div><pre><code>${chapter.eventLoopCode}</code></pre><div class="event-output"><span>Execution order</span><b>Start</b><i>→</i><b>End</b><i>→</i><b>File callback</b></div></section><aside class="event-note-panel"><div class="event-flow-heading"><span>!</span><div><h4>Yaad rakhein</h4><p>Concurrency ka faida tab rehta hai jab callbacks chhoti hon.</p></div></div><ul>${notes}</ul></aside></div>
      <div class="event-official-links"><strong>Node.js docs</strong><a href="https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick" target="_blank" rel="noreferrer">Event Loop <span>↗</span></a><a href="https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop" target="_blank" rel="noreferrer">Don't block the Event Loop <span>↗</span></a><a href="https://nodejs.org/api/worker_threads.html" target="_blank" rel="noreferrer">Worker Threads <span>↗</span></a></div>
      <div class="lesson-bottom"><span class="lesson-bottom-label">START I/O → DO OTHER WORK → RESUME CALLBACK</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => { activeChapter = nextIndex; renderChapters(); });
    return;
  }
  if (chapter.requestFlowGuide) {
    const phases = chapter.phases.map((phase, phaseIndex) => {
      const [first, last] = phase.steps.split('—').map((value) => Number(value) - 1);
      const steps = chapter.requestSteps.slice(first, last + 1).map((step, index) => {
        const stepNumber = first + index + 1;
        return `<article class="request-step-card ${phase.color}"><div class="request-step-top"><span>${String(stepNumber).padStart(2, '0')}</span><b>${step.icon}</b></div><h5>${step.title}</h5><p>${step.detail}</p></article>`;
      }).join('');
      return `<section class="request-phase ${phase.color}"><div class="request-phase-heading"><span>0${phaseIndex + 1}</span><div><h4>${phase.name}</h4><small>Steps ${phase.steps}</small></div></div><div class="request-step-grid">${steps}</div></section>`;
    }).join('');
    const methods = chapter.httpMethods.map((item) => `<div class="request-method"><code>${item.name}</code><span>${item.detail}</span></div>`).join('');
    const statuses = chapter.statusCodes.map((item) => `<div class="request-status"><code>${item.code}</code><span>${item.label}</span></div>`).join('');
    const notes = chapter.flowNotes.map((note) => `<li>${note}</li>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
      <div class="request-summary-flow"><div><span>01</span><b>Browser</b><small>request bheje</small></div><i>→</i><div><span>02</span><b>Server / App</b><small>kaam kare</small></div><i>→</i><div><span>03</span><b>Database</b><small>data de (agar zaroori)</small></div><i>→</i><div><span>04</span><b>Browser</b><small>response render kare</small></div></div>
      <div class="request-phase-list">${phases}</div>
      <div class="request-reference-grid"><section class="request-reference-card methods"><div class="request-reference-heading"><span>⇅</span><div><h4>HTTP methods</h4><p>Request ka maqsad</p></div></div><div class="request-method-list">${methods}</div></section><section class="request-reference-card statuses"><div class="request-reference-heading"><span>▤</span><div><h4>Status codes</h4><p>Server ka natija</p></div></div><div class="request-status-list">${statuses}</div></section></div>
      <aside class="request-flow-notes"><strong>Flow ko samajhne ke notes</strong><ul>${notes}</ul></aside>
      <div class="lesson-bottom"><span class="lesson-bottom-label">REQUEST → PROCESS → RESPONSE → RENDER</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => { activeChapter = nextIndex; renderChapters(); });
    return;
  }
  if (chapter.nextStructureGuide) {
    const treeRows = chapter.treeRows.map((item) => `<div class="next-tree-row ${item.type}" style="--depth:${item.depth}"><span class="next-tree-icon">${item.type === 'root' || ['generated', 'dependencies', 'public', 'src', 'app', 'group', 'folder'].includes(item.type) ? '▰' : '▤'}</span><code>${item.name}</code><small>${item.note}</small></div>`).join('');
    const structureCards = chapter.structureItems.map((item, index) => `<article class="next-structure-card ${item.color}"><div><span>${item.icon}</span><small>${String(index + 1).padStart(2, '0')}</small></div><h5>${item.name}</h5><p>${item.detail}</p></article>`).join('');
    const routeRows = chapter.routeExamples.map((item) => `<tr><td><code>${item.file}</code></td><td><code>${item.route}</code></td></tr>`).join('');
    const notes = chapter.structureNotes.map((note) => `<li>${note}</li>`).join('');
    const sources = chapter.structureSources.map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}<span aria-hidden="true">↗</span></a>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
      <div class="next-structure-split"><section class="next-tree-panel"><div class="next-panel-heading"><span>⌘</span><div><h4>Project tree</h4><p>Folders ki nesting aur route files dekhein.</p></div></div><div class="next-project-tree">${treeRows}</div></section><section class="next-files-panel"><div class="next-panel-heading"><span>▤</span><div><h4>Folder / file ka kaam</h4><p>Special files aur aam folders ka farq.</p></div></div><div class="next-structure-grid">${structureCards}</div></section></div>
      <div class="next-structure-bottom"><section class="next-routes-panel"><div class="next-panel-heading"><span>↗</span><div><h4>Routing examples</h4><p>File path se URL kaise banta hai?</p></div></div><div class="comparison-table-wrap"><table class="comparison-table"><thead><tr><th>File / folder</th><th>Route</th></tr></thead><tbody>${routeRows}</tbody></table></div></section><section class="next-notes-panel"><div class="next-panel-heading"><span>✳</span><div><h4>Yaad rakhne wali baatein</h4><p>App Router ke bunyadi rules.</p></div></div><ul>${notes}</ul></section></div>
      <div class="next-structure-sources"><strong>Official Next.js docs</strong>${sources}</div>
      <div class="lesson-bottom"><span class="lesson-bottom-label">FOLDER → ROUTE · SPECIAL FILE → UI BEHAVIOR</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => { activeChapter = nextIndex; renderChapters(); });
    return;
  }
  if (chapter.chatbotGuide) {
    const botCards = chapter.chatbotTypes.map((bot, index) => `
      <article class="bot-type-card ${bot.color}"><div class="bot-card-heading"><span class="bot-type-number">0${index + 1}</span><span class="bot-type-icon">${bot.icon}</span><h4>${bot.title}</h4></div><p>${bot.detail}</p><div class="bot-flow" aria-label="Chatbot ka flow">${bot.flow.map((step, stepIndex) => `<div><b>${String(stepIndex + 1).padStart(2, '0')}</b><span>${step}</span></div>${stepIndex < bot.flow.length - 1 ? '<i aria-hidden="true">→</i>' : ''}`).join('')}</div><div class="bot-details-grid"><div><strong>Khusoosiyat</strong><ul>${bot.features.map((item) => `<li>${item}</li>`).join('')}</ul></div><div><strong>Misalein</strong><ul>${bot.cases.map((item) => `<li>${item}</li>`).join('')}</ul></div></div><pre><code>${bot.example}</code></pre></article>`).join('');
    const groqFlow = chapter.groqFlow.map((step, index) => `<div class="groq-flow-step"><b>0${index + 1}</b><span>${step}</span></div>${index < chapter.groqFlow.length - 1 ? '<i aria-hidden="true">→</i>' : ''}`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
      <div class="bot-type-grid">${botCards}</div>
      <section class="groq-architecture"><div class="groq-heading"><span>↗</span><div><h4>Groq kahan fit hota hai?</h4><p>${chapter.groqRole}</p></div></div><div class="groq-flow">${groqFlow}</div><div class="groq-security"><b>!</b><p><strong>API key server par rakho.</strong> ${chapter.securityTip}</p></div><a class="lesson-source-link" href="https://console.groq.com/docs/api-reference" target="_blank" rel="noreferrer">Groq API reference <span aria-hidden="true">↗</span></a></section>
      <div class="lesson-bottom"><span class="lesson-bottom-label">RULES MATCH KAREIN · AI MODEL JAWAB BANAYE</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => { activeChapter = nextIndex; renderChapters(); });
    return;
  }
  if (chapter.chatwootGuide) {
    const groups = chapter.categoryGroups.map((group, index) => `<article class="chat-category-card ${group.color}"><div class="chat-category-head"><span>${group.icon}</span><div><small>0${index + 1}</small><h4>${group.title}</h4></div></div><ol>${group.items.map((item) => `<li>${item}</li>`).join('')}</ol></article>`).join('');
    const platforms = chapter.platformGroups.map((group) => `<section class="platform-group ${group.color}"><div class="platform-group-head"><span>${group.icon}</span><div><h4>${group.title}</h4><p>Examples — category ke mutabiq shortlist karein</p></div></div><div class="platform-chip-list">${group.items.map((item, index) => `<span class="platform-chip ${item === 'Chatwoot' ? 'featured' : ''}"><b>${String(index + 1).padStart(2, '0')}</b>${item}</span>`).join('')}</div></section>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
      <div class="chat-category-grid">${groups}</div>
      <section class="platforms-section"><div class="platform-section-title"><span>⇄</span><div><h4>Chatwoot ke qareeb tools</h4><p>Yeh customer support, shared inbox ya chatbot-builder ke examples hain; har product ka focus aik jaisa nahi.</p></div></div><div class="platform-groups">${platforms}</div><div class="chatwoot-focus"><span class="chatwoot-mark">C</span><p><strong>Chatwoot ka focus:</strong> ${chapter.chatwootNote}</p><a href="https://www.chatwoot.com/community" target="_blank" rel="noreferrer">Chatwoot Community Edition <span aria-hidden="true">↗</span></a></div><div class="platform-caveat"><span>i</span>${chapter.compareNote}</div></section>
      <div class="lesson-bottom"><span class="lesson-bottom-label">CATEGORY INTKHAAB → USER KI ZAROORAT KE MUTABIQ</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => { activeChapter = nextIndex; renderChapters(); });
    return;
  }
  if (chapter.envGuide) {
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div>
      <h3>${chapter.heading}</h3>
      <p class="definition">${chapter.definition}</p>
      <section class="env-meaning" aria-label="Environment variable ki tashreeh"><span class="env-meaning-icon">{ }</span><div><strong>Environment variable kya hai?</strong><p>App ke bahar rakhi hui setting, jaise database address ya API key. Is se aik hi code ko local, development aur production mein mukhtalif values mil sakti hain.</p></div><span class="env-meaning-tag">CONFIG → APP</span></section>
      <div class="env-file-grid">
        <article class="env-file-card local"><div class="env-file-head"><span>01</span><code>.env.local</code><b>PRIVATE</b></div><p>Apne computer ki local values aur secrets. Aam tor par Git mein commit nahi hoti.</p><div class="env-file-foot"><span class="env-status private">Git: ignore</span><span>Local kaam</span></div></article>
        <article class="env-file-card example"><div class="env-file-head"><span>02</span><code>.env.example</code><b>TEMPLATE</b></div><p>Required variables ki sample list. Placeholder/khali values ke saath team ko share karne ke liye commit hoti hai.</p><div class="env-file-foot"><span class="env-status template">Git: commit</span><span>Runtime mein load nahi</span></div></article>
        <article class="env-file-card base"><div class="env-file-head"><span>03</span><code>.env</code><b>DEFAULT</b></div><p>Common defaults. Isay sirf non-secret values ke liye rakhein; secret values repository mein na bhejein.</p><div class="env-file-foot"><span class="env-status default">Git: ehtiyat</span><span>Base settings</span></div></article>
        <article class="env-file-card dev"><div class="env-file-head"><span>04</span><code>.env.development</code><b>DEV MODE</b></div><p>Development mode ke shared values. Personal credentials yahan rakhne ke bajaye local file use karein.</p><div class="env-file-foot"><span class="env-status dev-tag">Git: no secrets</span><span><code>next dev</code></span></div></article>
        <article class="env-file-card prod"><div class="env-file-head"><span>05</span><code>.env.production</code><b>PROD MODE</b></div><p>Production build ke defaults. Live secrets deployment platform par secure settings mein set karein.</p><div class="env-file-foot"><span class="env-status prod-tag">Git: no secrets</span><span><code>next build</code></span></div></article>
      </div>
      <section class="env-priority"><div class="env-section-title"><span>⇩</span><div><h4>Next.js: value kis jagah se li jati hai?</h4><p>Variable pehli matching jagah par milte hi baqi files check nahi hotin.</p></div><span class="env-order-label">Zyada priority → kam</span></div><div class="env-order-flow"><div><b>1</b><code>process.env</code><small>Server/deploy settings</small></div><i>↓</i><div><b>2</b><code>.env.development.local</code><small>ya .env.production.local</small></div><i>↓</i><div><b>3</b><code>.env.local</code><small>Test mode mein skip</small></div><i>↓</i><div><b>4</b><code>.env.development</code><small>ya .env.production</small></div><i>↓</i><div><b>5</b><code>.env</code><small>Common fallback</small></div></div><div class="env-template-note"><span>↳</span><strong>.env.example is order mein shamil nahi:</strong> yeh sirf insaan ke liye template hai; Next.js isay environment variables ke taur par load nahi karta.</div></section>
      <div class="env-bottom-grid"><section class="env-code-card"><div class="env-section-title"><span>⌘</span><div><h4>Safe example</h4><p>Template share karein, asli secrets nahi.</p></div></div><pre><code># .env.example — placeholder values
DATABASE_URL=
API_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000</code></pre><pre><code># .env.local — apni machine par
DATABASE_URL=postgresql://user:pass@localhost:5432/app
API_SECRET=your-local-secret</code></pre></section><section class="env-public-card"><div class="env-public-icon">◎</div><div><h4><code>NEXT_PUBLIC_</code> ka matlab</h4><p>Next.js is prefix wali value ko browser JavaScript mein bhej sakta hai aur build waqt bundle mein likhta hai.</p><strong>Is prefix ke saath password, private API key ya database secret kabhi na rakhein.</strong></div></section></div>
      <aside class="env-project-note"><span>i</span><p><strong>Is project ke liye:</strong> yeh app simple HTML/CSS/JS hai. Browser .env file ko khud se load nahi karta; .env tab kaam karti hai jab Next.js ya doosra build/server tool usay process kare.</p></aside>
      <div class="lesson-bottom"><span class="lesson-bottom-label">SECRETS PRIVATE · TEMPLATE SHAREABLE</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => { activeChapter = nextIndex; renderChapters(); });
    return;
  }
  if (chapter.dbSecurityGuide) {
    const flowCards = chapter.accessFlow.map((item, index) => `
      <article class="dbsec-flow-card ${item.color}"><span class="dbsec-flow-number">0${index + 1}</span><span class="dbsec-flow-icon">${item.icon}</span><h5>${item.name}</h5><strong>${item.question}</strong><p>${item.detail}</p></article>`).join('');
    const levels = chapter.securityLevels.map((item, index) => `
      <article class="dbsec-level-card ${item.color}"><div class="dbsec-level-heading"><span>${index + 1}</span><span class="dbsec-level-icon">${item.icon}</span><h5>${item.name}</h5></div><p>${item.detail}</p><pre><code>${item.example}</code></pre></article>`).join('');
    const models = chapter.accessModels.map((item) => `
      <article class="dbsec-model-card ${item.color}"><span>${item.icon}</span><div><h5>${item.name} <small>${item.fullName}</small></h5><p>${item.detail}</p><code>${item.example}</code></div></article>`).join('');
    const functions = chapter.functionSecurity.map((item) => `
      <article class="dbsec-function-card ${item.color}"><span class="dbsec-function-icon">${item.icon}</span><div><span class="dbsec-function-label">${item.label}</span><h5>${item.name}</h5><p>${item.detail}</p></div></article>`).join('');
    const safeguards = chapter.functionSafeguards.map((item) => `<li>${item}</li>`).join('');
    const indexes = chapter.indexGuide.map((item) => `
      <article class="dbsec-index-card"><span>${item.icon}</span><h5>${item.name}</h5><p>${item.goodFor}</p></article>`).join('');
    const migrations = chapter.managementSteps.map((item, index) => `
      <article class="dbsec-migration-step"><span>${index + 1}</span><h5>${item.name}</h5><p>${item.detail}</p></article>`).join('');
    const secrets = chapter.secretNotes.map((item) => `<li>${item}</li>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline">
        <span class="lesson-tag">${chapter.concept}</span>
        <span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
      </div>
      <h3>${chapter.heading}</h3>
      <p class="definition">${chapter.definition}</p>
      <div class="dbsec-flow">${flowCards}</div>
      <section class="dbsec-section">
        <div class="rls-section-heading"><span>01</span><h4>Access ko kis level par control karein?</h4><p>Har level ka scope alag hai—requirements ke mutabiq sahi layer chunein.</p></div>
        <div class="dbsec-level-grid">${levels}</div>
        <div class="dbsec-layer-note"><strong>Yeh layers aik doosray ki jagah nahi letin:</strong> database privileges pehle access dete hain; RLS un rows ko filter karti hai jin tak user pohanch sakta hai.</div>
      </section>
      <section class="dbsec-section">
        <div class="rls-section-heading"><span>02</span><h4>Roles aur attributes se access</h4><p>Permissions role ko assign karein, ya user/resource attributes ke mutabiq rule banayein.</p></div>
        <div class="dbsec-model-grid">${models}</div>
      </section>
      <section class="dbsec-section">
        <div class="rls-section-heading"><span>03</span><h4>PostgreSQL functions ki security</h4><p>Function caller ke rights se chalega ya owner ke rights se—yeh explicitly samjhein.</p></div>
        <div class="dbsec-function-grid">${functions}</div>
        <div class="dbsec-warning"><strong>SECURITY DEFINER ko mehfooz rakhein</strong><ul>${safeguards}</ul><code>SET search_path = trusted_schema, pg_temp</code></div>
      </section>
      <section class="dbsec-section">
        <div class="rls-section-heading"><span>04</span><h4>Security aur performance saath</h4><p>Policy filters mein use hone wale columns par index query ko tez kar sakta hai; query plan aur real workload check karein.</p></div>
        <div class="dbsec-index-grid">${indexes}</div>
      </section>
      <section class="dbsec-bottom-grid">
        <div class="dbsec-management"><div class="rls-section-heading"><span>05</span><h4>Database changes track karein</h4><p>Schema ko migration files ke zariye manage karein.</p></div><div class="dbsec-migration-flow">${migrations}</div></div>
        <div class="dbsec-secrets"><h4>Connection string aur secrets</h4><div class="dbsec-env-file"><span>.env</span><code>DATABASE_URL=postgresql://…</code></div><ul>${secrets}</ul></div>
      </section>
      <div class="lesson-bottom">
        <span class="lesson-bottom-label">IDENTITY → PERMISSION → DATA ACCESS</span>
        <button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button>
      </div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => {
      activeChapter = nextIndex;
      renderChapters();
    });
    return;
  }

  if (chapter.gtmGuide) {
    const toolCards = chapter.tools.map((tool) => `
      <article class="gtm-tool-card ${tool.color}">
        <span class="gtm-tool-icon">${tool.icon}</span><div><span class="gtm-tool-short">${tool.short}</span><h5>${tool.name}</h5><p>${tool.description}</p></div>
      </article>`).join('');
    const flow = chapter.trackingFlow.map((step, index) => `
      <article class="gtm-flow-step"><span class="gtm-flow-number">${index + 1}</span><span class="gtm-flow-icon">${step.icon}</span><h5>${step.title}</h5><p>${step.detail}</p></article>`).join('');
    const components = chapter.components.map((item, index) => `
      <article class="gtm-component-card"><span class="gtm-component-number">0${index + 1}</span><span class="gtm-component-icon">${item.icon}</span><div><h5>${item.name}</h5><p>${item.detail}</p></div></article>`).join('');
    const events = chapter.events.map((event) => `<span class="gtm-event-chip">${event}</span>`).join('');
    const setup = chapter.setupSteps.map((step, index) => `<li><span>${index + 1}</span><div><strong>${step.title}</strong><p>${step.detail}</p></div></li>`).join('');
    const reports = chapter.reports.map((report) => `<article class="gtm-report-card ${report.name === 'GA4' ? 'ga4' : 'ads'}"><h5>${report.name} reports</h5><ul>${report.items.map((item) => `<li>${item}</li>`).join('')}</ul></article>`).join('');
    const bestPractices = chapter.bestPractices.map((tip) => `<li>${tip}</li>`).join('');
    const benefits = chapter.benefits.map((benefit) => `<li>${benefit}</li>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline">
        <span class="lesson-tag">${chapter.concept}</span>
        <span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
      </div>
      <h3>${chapter.heading}</h3>
      <p class="definition">${chapter.definition}</p>
      <div class="gtm-tool-grid">${toolCards}</div>
      <section class="gtm-section">
        <div class="rls-section-heading"><span>01</span><h4>User action se report tak</h4><p>Event data website se analytics aur ads platforms tak jata hai.</p></div>
        <div class="gtm-flow">${flow}</div>
      </section>
      <section class="gtm-section">
        <div class="rls-section-heading"><span>02</span><h4>GTM ke 4 components</h4><p>Tag kya bhejega, trigger kab fire hoga, aur variable kaunsi value dega.</p></div>
        <div class="gtm-components">${components}</div>
      </section>
      <section class="gtm-section gtm-datalayer-section">
        <div class="rls-section-heading"><span>03</span><h4>Data Layer event ki misaal</h4><p>Button click par event aur uski details push karein.</p></div>
        <div class="gtm-data-row"><pre><code>${chapter.dataLayerExample}</code></pre><div class="gtm-data-notes"><strong>Track kiye ja sakne wale events</strong><div class="gtm-event-list">${events}</div><p>GTM mein <code>cta_click</code> naam ka Custom Event trigger is push ko match kar sakta hai.</p></div></div>
      </section>
      <section class="gtm-section">
        <div class="rls-section-heading"><span>04</span><h4>Setup ka tareeqa</h4><p>IDs apne accounts se lein; placeholders ko asli IDs se badlein.</p></div>
        <div class="gtm-ids"><span>GTM Container: <code>GTM-XXXXXXX</code></span><span>GA4 Measurement: <code>G-XXXXXXXXXX</code></span><span>Ads Conversion: <code>AW-XXXXXXXXXX</code> + label</span></div>
        <ol class="gtm-setup-list">${setup}</ol>
      </section>
      <section class="gtm-section">
        <div class="rls-section-heading"><span>05</span><h4>Reports mein kya dekhein?</h4><p>Har platform apne maqsad ke mutabiq reports deta hai.</p></div>
        <div class="gtm-reports">${reports}</div>
      </section>
      <section class="gtm-bottom-grid">
        <div class="gtm-note-card"><h4>Behtar tracking ke liye</h4><ul>${bestPractices}</ul></div>
        <div class="gtm-note-card gtm-benefits"><h4>Faide</h4><ul>${benefits}</ul></div>
      </section>
      <div class="lesson-bottom">
        <span class="lesson-bottom-label">GTM → GA4 + GOOGLE ADS</span>
        <button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button>
      </div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => {
      activeChapter = nextIndex;
      renderChapters();
    });
    return;
  }

  if (chapter.hooksGuide) {
    const hookCards = chapter.hooks.map((hook, index) => `
      <article class="hook-card hook-${hook.color}">
        <span class="hook-number">${String(index + 1).padStart(2, '0')} / ${String(chapter.hooks.length).padStart(2, '0')}</span>
        <div class="hook-card-heading"><span class="hook-icon">${hook.icon}</span><h5>${hook.name}</h5></div>
        <span class="hook-group">${hook.group}</span>
        <p>${hook.detail}</p>
        <pre><code>${hook.code}</code></pre>
      </article>`).join('');
    const hookFlow = chapter.customFlow.map((step, index) => `
      <div class="custom-hook-step"><span>${index + 1}</span><strong>${step.title}</strong><p>${step.detail}</p></div>`).join('');
    const hookNotes = chapter.notes.map((note) => `<li>${note}</li>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline">
        <span class="lesson-tag">${chapter.concept}</span>
        <span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
      </div>
      <h3>${chapter.heading}</h3>
      <p class="definition">${chapter.definition}</p>
      <div class="hook-legend"><span><i class="legend-state"></i>State & context</span><span><i class="legend-effects"></i>Effects & refs</span><span><i class="legend-performance"></i>Performance</span><span><i class="legend-other"></i>Actions & other</span></div>
      <div class="hook-grid">${hookCards}</div>
      <section class="custom-hook-section">
        <div class="rls-section-heading"><span>★</span><h4>Apna Custom Hook kaise banayein?</h4><p>Reusable logic ko aik naam wale Hook mein jama karein.</p></div>
        <div class="custom-hook-flow">${hookFlow}</div>
        <div class="custom-hook-example"><pre><code>${chapter.customExample}</code></pre><div><strong>Istemaal</strong><p>Custom Hook ko mukhtalif components mein call karke wohi logic dobara use karein.</p></div></div>
      </section>
      <aside class="hook-notes"><h4>Yaad rakhein</h4><ul>${hookNotes}</ul></aside>
      <div class="lesson-bottom">
        <span class="lesson-bottom-label">${chapter.hooks.length} HOOKS · BUILT-IN, LIBRARY AUR CUSTOM</span>
        <button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button>
      </div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => {
      activeChapter = nextIndex;
      renderChapters();
    });
    return;
  }

  if (chapter.authGuide) {
    const concepts = chapter.coreConcepts.map((item, index) => `
      <article class="auth-concept-card">
        <span class="auth-card-number">${String(index + 1).padStart(2, '0')} / ${String(chapter.coreConcepts.length).padStart(2, '0')}</span>
        <span class="auth-concept-icon">${item.icon}</span>
        <h5>${item.title}</h5><p>${item.detail}</p>
      </article>`).join('');
    const sessionCards = chapter.sessionConcepts.map((item) => `
      <article class="auth-session-card">
        <span class="auth-session-icon">${item.icon}</span><div><h5>${item.title}</h5><p>${item.detail}</p></div>
      </article>`).join('');
    const flowSteps = chapter.authFlow.map((step, index) => `
      <article class="auth-flow-step"><span>${index + 1}</span><h5>${step.title}</h5><p>${step.detail}</p></article>`).join('');
    const clients = chapter.clientTypes.map((client) => `
      <article class="auth-client-card"><div class="auth-client-heading"><span>${client.icon}</span><div><h5>${client.title}</h5><small>${client.side}</small></div></div><ul>${client.details.map((detail) => `<li>${detail}</li>`).join('')}</ul></article>`).join('');
    const useCases = chapter.useCases.map((item) => `<tr><th scope="row">${item.name}</th><td>${item.example}</td></tr>`).join('');
    const securityNotes = chapter.securityNotes.map((note) => `<li>${note}</li>`).join('');
    const supabaseTerms = chapter.supabaseTerms.map((item, index) => `
      <article class="auth-term-card ${item.color}"><div class="auth-term-head"><span>${item.icon}</span><small>${String(index + 1).padStart(2, '0')}</small></div><h5>${item.title}</h5><p>${item.detail}</p></article>`).join('');
    const authSources = chapter.authSources.map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}<span aria-hidden="true">↗</span></a>`).join('');
    const summary = chapter.summary.map((item) => `
      <div class="auth-summary-step"><strong>${item.title}</strong><span>${item.detail}</span></div>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline">
        <span class="lesson-tag">${chapter.concept}</span>
        <span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
      </div>
      <h3>${chapter.heading}</h3>
      <p class="definition">${chapter.definition}</p>
      <section class="auth-section">
        <div class="rls-section-heading"><span>01</span><h4>Bunyadi concepts</h4><p>OAuth login aur app ki pehchan ke liye bunyadi terms.</p></div>
        <div class="auth-concept-grid">${concepts}</div>
      </section>
      <section class="auth-section">
        <div class="rls-section-heading"><span>02</span><h4>Session aur security</h4><p>Login ke baad app user ko aglay requests mein kaise pehchanti hai.</p></div>
        <div class="auth-session-grid">${sessionCards}</div>
      </section>
      <section class="auth-section">
        <div class="rls-section-heading"><span>03</span><h4>Supabase sign-in flow</h4><p>OAuth provider se session banne tak ka safar.</p></div>
        <div class="auth-flow">${flowSteps}</div>
        <div class="auth-client-grid">${clients}</div>
        <p class="auth-sync-note"><span>↔</span> Dono clients session ko browser aur server ke darmiyan sync rakhne mein madad karte hain.</p>
      </section>
      <section class="auth-section">
        <div class="rls-section-heading"><span>04</span><h4>Supabase implementation terms</h4><p>Redirect URL se package migration aur database security tak.</p></div>
        <div class="auth-term-grid">${supabaseTerms}</div>
        <div class="auth-source-links"><strong>Official docs</strong>${authSources}</div>
      </section>
      <section class="auth-section auth-proxy-section">
        <div class="rls-section-heading"><span>05</span><h4>Next.js Proxy / Middleware</h4><p>Protected route par request se pehle session check ya refresh hota hai.</p></div>
        <div class="auth-proxy-grid"><pre><code>${chapter.proxyCode}</code></pre><div class="auth-proxy-notes"><strong>Version note</strong><p>${chapter.middlewareNote}</p><strong>Security note</strong><p>Supabase server-side code mein user verify karne ke liye <code>getClaims()</code> use karein. Sirf cookie se session parhne wale <code>getSession()</code> par bharosa na karein.</p></div></div>
      </section>
      <section class="auth-section">
        <div class="rls-section-heading"><span>06</span><h4>Kahan istemaal hota hai?</h4><p>Login aur role ke mutabiq routes protect karein.</p></div>
        <div class="auth-table-wrap"><table class="comparison-table auth-use-table"><thead><tr><th>Use case</th><th>Misal</th></tr></thead><tbody>${useCases}</tbody></table></div>
      </section>
      <section class="auth-bottom-grid">
        <div class="auth-bottom-card"><h4>Zaroori security baatein</h4><ul>${securityNotes}</ul></div>
        <div class="auth-bottom-card auth-summary-card"><h4>Quick summary</h4><div class="auth-summary-flow">${summary}</div></div>
      </section>
      <div class="lesson-bottom">
        <span class="lesson-bottom-label">AUTHENTICATION & SESSION GUIDE</span>
        <button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button>
      </div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => {
      activeChapter = nextIndex;
      renderChapters();
    });
    return;
  }

  if (chapter.rlsGuide) {
    const flowSteps = chapter.flow.map((step) => `<div class="rls-flow-step"><strong>${step.title}</strong><span>${step.text}</span></div>`).join('');
    const operations = chapter.operations.map((operation, index) => `
      <article class="rls-operation-card">
        <span class="rls-operation-number">${String(index + 1).padStart(2, '0')} / 05</span>
        <span class="rls-operation-icon">${operation.icon}</span>
        <h5>${operation.name} policy</h5>
        <p>${operation.action}</p>
        <code>${operation.clause}</code>
      </article>`).join('');
    const behaviorCards = chapter.behaviors.map((behavior) => `
      <article class="rls-behavior-card ${behavior.style}">
        <span class="rls-behavior-label">${behavior.name} <small>${behavior.style === 'permissive' ? '(default)' : ''}</small></span>
        <strong>${behavior.logic}</strong><p>${behavior.detail}</p>
        <span class="rls-behavior-result">${behavior.result}</span>
      </article>`).join('');
    const roles = chapter.roles.map((role) => `<div class="rls-role-row"><strong>${role.name}</strong><span>${role.detail}</span></div>`).join('');
    const patterns = chapter.patterns.map((pattern, index) => `
      <article class="rls-pattern-card ${pattern.color}-pattern">
        <div class="rls-pattern-heading"><span>${index + 1}</span><div><h5>${pattern.name}</h5><p>${pattern.detail}</p></div></div>
        <pre><code>${pattern.code}</code></pre>
      </article>`).join('');
    const summary = chapter.summary.map((item) => `<div class="rls-summary-item"><strong>${item.name}</strong><span>${item.detail}</span><code>${item.clause}</code></div>`).join('');
    const commands = chapter.commands.map((command) => `<li><code>${command}</code></li>`).join('');
    const tips = chapter.tips.map((tip) => `<li>${tip}</li>`).join('');
    const dbmsConcepts = chapter.dbmsConcepts.map((item) => `<article class="rls-dbms-card"><strong>${item.name}</strong><h5>${item.fullName}</h5><p>${item.detail}</p></article>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline">
        <span class="lesson-tag">${chapter.concept}</span>
        <span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
      </div>
      <h3>${chapter.heading}</h3>
      <p class="definition">${chapter.definition}</p>
      <div class="rls-flow" aria-label="RLS request process">${flowSteps}</div>
      <section class="rls-section">
        <div class="rls-section-heading"><span>01</span><h4>Operation ke hisaab se policies</h4><p>Table par har kaam ke liye alag rule lagaya ja sakta hai.</p></div>
        <div class="rls-operation-grid">${operations}</div>
        <div class="rls-clauses"><div><code>USING</code><span>Kaunsi mojooda rows access ya edit ho sakti hain.</span></div><div><code>WITH CHECK</code><span>Nayi ya update ki hui row policy ko pass karti hai ya nahi.</span></div></div>
      </section>
      <section class="rls-section">
        <div class="rls-section-heading"><span>02</span><h4>Multiple policies ka behavior</h4><p>Policies mil kar access ka faisla karti hain.</p></div>
        <div class="rls-behavior-grid">${behaviorCards}</div>
      </section>
      <section class="rls-section rls-role-policy-section">
        <div class="rls-section-heading"><span>03</span><h4>Policy kis role par apply hoti hai?</h4><p>Policy ko specific users ya roles tak mehdood kiya ja sakta hai.</p></div>
        <div class="rls-role-policy-grid">
          <div class="rls-role-list">${roles}<p class="rls-role-note"><strong>Note:</strong> service_role RLS bypass kar sakta hai; ise trusted backend mein hi rakhein.</p></div>
          <pre class="rls-policy-code"><code>${chapter.policyExample}</code></pre>
        </div>
      </section>
      <section class="rls-section">
        <div class="rls-section-heading"><span>04</span><h4>Aam policy patterns</h4><p>In patterns ko apne table aur access rules ke mutabiq badlein.</p></div>
        <div class="rls-pattern-grid">${patterns}</div>
      </section>
      <section class="rls-section rls-summary-section">
        <div class="rls-section-heading"><span>05</span><h4>Quick summary</h4><p>Operation aur clause ka aik nazar mein jaiza.</p></div>
        <div class="rls-summary-grid">${summary}</div>
      </section>
      <section class="rls-bottom-grid">
        <div class="rls-bottom-card"><h4>Useful commands</h4><ul>${commands}</ul></div>
        <div class="rls-bottom-card rls-tips-card"><h4>RLS tips</h4><ul>${tips}</ul></div>
      </section>
      <section class="rls-section rls-dbms-section">
        <div class="rls-section-heading"><span>06</span><h4>DBMS ke access control models</h4><p>RLS ko in authorization concepts ke saath samjhein.</p></div>
        <div class="rls-dbms-grid">${dbmsConcepts}</div>
      </section>
      <div class="lesson-bottom">
        <span class="lesson-bottom-label">ROW-LEVEL SECURITY GUIDE</span>
        <button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button>
      </div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => {
      activeChapter = nextIndex;
      renderChapters();
    });
    return;
  }

  if (chapter.packageManagers) {
    const managerCards = chapter.packageManagers.map((manager, index) => `
      <article class="manager-card ${manager.style}">
        <div class="manager-card-topline"><span>${String(index + 1).padStart(2, '0')} / ${String(chapter.packageManagers.length).padStart(2, '0')}</span><span>${manager.fullName}</span></div>
        <div class="manager-card-heading"><span class="manager-icon">${manager.icon}</span><h4>${manager.title}</h4></div>
        <p class="manager-definition">${manager.definition}</p>
        <div class="manager-detail"><strong>Kaam</strong><ul>${manager.tasks.map((task) => `<li>${task}</li>`).join('')}</ul></div>
        <div class="manager-detail"><strong>Kab use karein?</strong><p>${manager.use}</p></div>
        <div class="manager-command"><span>Example</span><code>${manager.command}</code></div>
      </article>`).join('');
    const comparisonCards = chapter.packageComparison.map((item) => `
      <div class="package-summary-card"><strong>${item.name}</strong><span>${item.summary}</span></div>`).join('');
    const installGuide = chapter.packageInstallGuide ? `
      <section class="package-install-guide" aria-label="Packages kahan install hotay hain">
        <h4>Package install ho kar kahan jata hai?</h4>
        <div class="package-install-grid">
          <article><strong>Project ke liye · local</strong><p>${chapter.packageInstallGuide.local}</p><code>${chapter.packageInstallGuide.localCommand}</code></article>
          <article><strong>Command-line tool · global</strong><p>${chapter.packageInstallGuide.global}</p><code>${chapter.packageInstallGuide.globalCommand}</code></article>
        </div>
        <p class="package-install-check">Location check: <code>${chapter.packageInstallGuide.checkCommand}</code></p>
      </section>` : '';
    lessonCard.innerHTML = `
      <div class="lesson-topline">
        <span class="lesson-tag">${chapter.concept}</span>
        <span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
      </div>
      <h3>${chapter.heading}</h3>
      <p class="definition">${chapter.definition}</p>
      <div class="manager-grid">${managerCards}</div>
      <section class="package-comparison" aria-label="Package managers ka aik line mein muqabla">
        <h4>Aik nazar mein muqabla</h4><div class="package-summary-grid">${comparisonCards}</div>
      </section>
      ${installGuide}
      <div class="lesson-bottom">
        <span class="lesson-bottom-label">JAVASCRIPT KE 5 PACKAGE TOOLS</span>
        <button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button>
      </div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => {
      activeChapter = nextIndex;
      renderChapters();
    });
    return;
  }

  if (chapter.appTypes) {
    const appCards = chapter.appTypes.map((type) => `
      <article class="app-type-card ${type.style}">
        <div class="app-type-heading"><span class="app-type-icon">${type.icon}</span><div><h4>${type.title}</h4><span>${type.subtitle}</span></div></div>
        <div class="app-info-block"><strong>Kya hota hai?</strong><p>${type.definition}</p></div>
        <div class="app-info-block"><strong>Misalein</strong><p>${type.examples}</p></div>
        <div class="app-info-block"><strong>Technologies</strong><p>${type.technologies}</p></div>
      </article>`).join('');
    const tableRows = chapter.comparison.map((row) => `
      <tr><th scope="row">${row.feature}</th><td>${row.app}</td><td>${row.website}</td><td>${row.webApp}</td></tr>`).join('');
    const shortcuts = chapter.shortcuts.map((item) => `
      <div class="shortcut-card"><strong>${item.title}</strong><span>${item.text}</span></div>`).join('');
    const projectExamples = chapter.projectExample.map((item) => `
      <article class="project-example-card"><h5>${item.title}</h5><p>${item.text}</p></article>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline">
        <span class="lesson-tag">${chapter.concept}</span>
        <span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
      </div>
      <h3>${chapter.heading}</h3>
      <p class="definition">${chapter.definition}</p>
      <div class="app-type-grid">${appCards}</div>
      <section class="comparison-section" aria-labelledby="comparison-title">
        <h4 id="comparison-title">Mukhtasar muqabla</h4>
        <div class="comparison-table-wrap"><table class="comparison-table">
          <thead><tr><th scope="col">Khasiyat</th><th scope="col">App</th><th scope="col">Website</th><th scope="col">Web App</th></tr></thead>
          <tbody>${tableRows}</tbody>
        </table></div>
      </section>
      <section class="app-extras">
        <div class="shortcut-section"><h4>Yaad rakhne ka asaan tareeqa</h4><div class="shortcut-grid">${shortcuts}</div></div>
        <div class="project-example-section"><h4>HOF Pack ki misaal</h4><div class="project-example-grid">${projectExamples}</div></div>
      </section>
      <div class="lesson-bottom">
        <span class="lesson-bottom-label">APP, WEBSITE AUR WEB APP</span>
        <button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button>
      </div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => {
      activeChapter = nextIndex;
      renderChapters();
    });
    return;
  }

  if (chapter.editorTypes) {
    const editorCards = chapter.editorTypes.map((type, index) => `
      <article class="editor-card ${type.style}">
        <span class="editor-card-number">${String(index + 1).padStart(2, '0')} / ${String(chapter.editorTypes.length).padStart(2, '0')}</span>
        <div class="editor-card-heading"><span class="editor-icon">${type.icon}</span><h4>${type.title}</h4></div>
        <p>${type.definition}</p>
        <ul>${type.examples.map((example) => `<li>${example}</li>`).join('')}</ul>
      </article>`).join('');
    const overlapExamples = chapter.overlaps.map((example) => `<li><strong>${example.name}</strong><span>${example.types}</span></li>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline">
        <span class="lesson-tag">${chapter.concept}</span>
        <span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
      </div>
      <h3>${chapter.heading}</h3>
      <p class="definition">${chapter.definition}</p>
      <div class="editor-grid">${editorCards}</div>
      <aside class="editor-notes" aria-label="Notes about editor categories">
        <div class="important-note"><span class="note-icon">!</span><div><h4>Categories overlap kar sakti hain</h4><p>Yeh aath qismein ek doosre se alag ya mehdood nahi hain. Kai editors ek hi waqt mein aik se zyada categories mein aa sakte hain.</p></div></div>
        <div class="overlap-examples"><h4>Examples</h4><ul>${overlapExamples}</ul></div>
      </aside>
      <div class="lesson-bottom">
        <span class="lesson-bottom-label">CODE EDITORS KI 8 QISMEIN</span>
        <button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button>
      </div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => {
      activeChapter = nextIndex;
      renderChapters();
    });
    return;
  }

  if (chapter.apparelTypes) {
    const typeCards = chapter.apparelTypes.map((type) => `
      <article class="glossary-item">
        <h5>${escapeGlossaryExample(type.name)}</h5>
        <p>${escapeGlossaryExample(type.detail)}</p>
        <p class="glossary-example"><strong>Misal:</strong> ${escapeGlossaryExample(type.example)}</p>
      </article>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline">
        <span class="lesson-tag">${chapter.concept}</span>
        <span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
      </div>
      <h3>${chapter.heading}</h3>
      <p class="definition">${chapter.definition}</p>
      <div class="glossary-content"><div class="glossary-grid">${typeCards}</div></div>
      <div class="lesson-bottom">
        <span class="lesson-bottom-label">${chapter.apparelTypes.length} ${chapter.title.toUpperCase()} KI QISMEIN</span>
        <button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button>
      </div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => {
      activeChapter = nextIndex;
      renderChapters();
    });
    return;
  }

  lessonCard.innerHTML = `
    <div class="lesson-topline">
      <span class="lesson-tag">${chapter.concept}</span>
      <span class="lesson-index">${String(activeChapterPosition()).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
    </div>
    <h3>${chapter.heading}</h3>
    <p class="definition">${chapter.definition}</p>
    <div class="example-card">
      <span class="example-mark" aria-hidden="true">✳</span>
      <div class="example-copy"><strong>Picture this</strong>${chapter.example}</div>
    </div>
    <div class="lesson-bottom">
      <span class="lesson-bottom-label">A SIMPLE DEFINITION TO BUILD ON</span>
      <button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button>
    </div>`;

  lessonCard.querySelector('.next-button').addEventListener('click', () => {
    activeChapter = nextIndex;
    renderChapters();
  });
}

function selectDepartment(department, focusTab = false) {
  const departmentChanged = activeDepartment !== department;
  activeDepartment = department;
  if (departmentChanged) activeChapter = 0;
  tabs.forEach((tab) => {
    const selected = tab.dataset.department === department;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focusTab) tab.focus();
  });
  const selectedTab = tabs.find((tab) => tab.dataset.department === department);
  selectedTab?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  panel.setAttribute('aria-labelledby', selectedTab.id);
  renderChapters();
  updateDepartmentScrollHint();
}

tabs.forEach((tab, index) => {
  tab.addEventListener('mouseenter', () => {
    if (!ignoreTabHoverUntilPointerMoves && !ignoreDepartmentHoverUntilPointerMoves) {
      scheduleHover('department', () => {
        if (!ignoreDepartmentHoverUntilPointerMoves) {
          selectDepartment(tab.dataset.department);
          ignoreDepartmentHoverUntilPointerMoves = true;
        }
      });
    }
  });
  tab.addEventListener('click', () => {
    cancelHover('department');
    ignoreDepartmentHoverUntilPointerMoves = false;
    selectDepartment(tab.dataset.department);
  });
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;
    selectDepartment(tabs[nextIndex].dataset.department, true);
  });
});

tabs[0]?.parentElement.addEventListener('mouseleave', () => cancelHover('department'));

document.addEventListener('pointermove', () => {
  ignoreTabHoverUntilPointerMoves = false;
  ignoreChapterHoverUntilPointerMoves = false;
  ignoreDepartmentHoverUntilPointerMoves = false;
});

let searchResults = [];
let highlightedSearchResult = -1;
let activeSearchHighlight = null;
let searchHighlightTimeout = 0;

function normalizeSearchText(text) {
  return String(text).normalize('NFKC').toLocaleLowerCase().replace(/\s+/g, ' ').trim();
}

function getChapterSearchText(value, strings = []) {
  if (typeof value === 'string' || typeof value === 'number') {
    strings.push(String(value));
  } else if (Array.isArray(value)) {
    value.forEach((item) => getChapterSearchText(item, strings));
  } else if (value && typeof value === 'object') {
    Object.values(value).forEach((item) => getChapterSearchText(item, strings));
  }
  return strings;
}

function findMatchingGlossaryEntry(value, query) {
  const matches = [];
  const visit = (item) => {
    if (Array.isArray(item)) {
      item.forEach(visit);
    } else if (item && typeof item === 'object') {
      const label = item.term || item.version || item.name || item.label;
      if (typeof label === 'string') {
        const entryText = normalizeSearchText(`${getChapterSearchText(item).join(' ')} ${glossaryExamples[item.term] || ''}`);
        if (entryText.includes(query)) {
          const normalizedLabel = normalizeSearchText(label);
          matches.push({
            title: label,
            excerpt: item.detail || item.example || glossaryExamples[item.term] || item.definition || label,
            score: normalizedLabel === query ? 100 : normalizedLabel.includes(query) ? 60 : 10,
          });
        }
      }
      Object.values(item).forEach(visit);
    }
  };
  visit(value);
  return matches.sort((a, b) => b.score - a.score)[0] || null;
}

function getChapterGlossaryExamples(value, terms = new Set()) {
  if (Array.isArray(value)) {
    value.forEach((item) => getChapterGlossaryExamples(item, terms));
  } else if (value && typeof value === 'object') {
    if (typeof value.term === 'string') terms.add(value.term);
    Object.values(value).forEach((item) => getChapterGlossaryExamples(item, terms));
  }
  return [...terms].map((term) => glossaryExamples[term]).filter(Boolean);
}

function escapeSearchHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function renderProjectSearchResults() {
  const query = normalizeSearchText(projectSearchInput.value);
  highlightedSearchResult = -1;
  if (!query) {
    projectSearchResults.hidden = true;
    projectSearchInput.setAttribute('aria-expanded', 'false');
    projectSearchResults.replaceChildren();
    searchResults = [];
    return;
  }

  searchResults = [];
  Object.entries(departments).forEach(([department, data]) => {
    data.chapters.forEach((chapter, chapterIndex) => {
      const content = getChapterSearchText(chapter).concat(getChapterGlossaryExamples(chapter)).join(' ');
      const normalizedContent = normalizeSearchText(content);
      if (!normalizedContent.includes(query)) return;

      const glossaryMatch = findMatchingGlossaryEntry(chapter, query);
      const titleMatch = normalizeSearchText(`${chapter.title} ${chapter.heading || ''}`).includes(query);
      const excerpt = glossaryMatch?.excerpt || chapter.definition || content;
      const exactLabel = glossaryMatch && normalizeSearchText(glossaryMatch.title) === query;
      const score = (exactLabel ? 100 : glossaryMatch ? 50 : 0) + (titleMatch ? 25 : 0);
      searchResults.push({ department, chapterIndex, chapter, title: glossaryMatch?.title || chapter.heading || chapter.title, targetLabel: glossaryMatch?.title || '', excerpt, score });
    });
  });

  searchResults.sort((a, b) => b.score - a.score || chapterTitleCollator.compare(a.title, b.title));
  searchResults = searchResults.slice(0, 10);
  projectSearchResults.replaceChildren();

  if (searchResults.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'project-search-status';
    empty.textContent = 'No matches found. Try another word.';
    projectSearchResults.append(empty);
  } else {
    searchResults.forEach((result, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'project-search-result';
      button.id = `project-search-result-${index}`;
      button.setAttribute('role', 'option');
      button.setAttribute('aria-selected', 'false');
      button.dataset.searchResultIndex = String(index);
      const departmentName = tabs.find((tab) => tab.dataset.department === result.department)?.querySelector('span:nth-child(2)')?.textContent || result.department;
      button.innerHTML = `<strong>${escapeSearchHtml(result.title)}</strong><small>${escapeSearchHtml(departmentName)} · ${escapeSearchHtml(result.chapter.title)}</small><span>${escapeSearchHtml(result.excerpt)}</span>`;
      button.addEventListener('click', () => selectProjectSearchResult(index));
      projectSearchResults.append(button);
    });
  }

  projectSearchResults.hidden = false;
  projectSearchInput.setAttribute('aria-expanded', 'true');
}

function selectProjectSearchResult(index) {
  const result = searchResults[index];
  if (!result) return;
  if (result.chapter.glossarySections && result.targetLabel) {
    const matchingCategory = result.chapter.glossarySections.findIndex((section) =>
      section.items.some((item) => normalizeSearchText(item.term) === normalizeSearchText(result.targetLabel))
    );
    activeResourceCategory = matchingCategory >= 0 ? matchingCategory : 0;
  } else if (result.chapter.glossarySections) {
    activeResourceCategory = 0;
  }
  ignoreTabHoverUntilPointerMoves = true;
  projectSearchResults.hidden = true;
  projectSearchInput.setAttribute('aria-expanded', 'false');
  selectDepartment(result.department);
  selectChapter(result.chapterIndex, true);
  requestAnimationFrame(() => {
    const targetText = normalizeSearchText(result.targetLabel || projectSearchInput.value);
    const match = [...lessonCard.querySelectorAll('h3, h4, h5, p, li, code')]
      .find((element) => normalizeSearchText(element.textContent).includes(targetText));
    const destination = match?.closest('.glossary-item, .windows-timeline-item') || match || lessonCard;
    destination.scrollIntoView({ behavior: 'smooth', block: 'center' });
    activeSearchHighlight?.classList.remove('search-result-highlight');
    window.clearTimeout(searchHighlightTimeout);
    activeSearchHighlight = destination;
    activeSearchHighlight.classList.add('search-result-highlight');
    searchHighlightTimeout = window.setTimeout(() => {
      activeSearchHighlight?.classList.remove('search-result-highlight');
      activeSearchHighlight = null;
    }, 3600);
  });
}

function updateHighlightedSearchResult(nextIndex) {
  if (searchResults.length === 0) return;
  highlightedSearchResult = (nextIndex + searchResults.length) % searchResults.length;
  [...projectSearchResults.querySelectorAll('.project-search-result')].forEach((button, index) => {
    const selected = index === highlightedSearchResult;
    button.setAttribute('aria-selected', String(selected));
    if (selected) button.scrollIntoView({ block: 'nearest' });
  });
}

projectSearchInput.addEventListener('input', renderProjectSearchResults);
projectSearchInput.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    updateHighlightedSearchResult(highlightedSearchResult + 1);
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    updateHighlightedSearchResult(highlightedSearchResult < 0 ? searchResults.length - 1 : highlightedSearchResult - 1);
  } else if (event.key === 'Enter' && highlightedSearchResult >= 0) {
    event.preventDefault();
    selectProjectSearchResult(highlightedSearchResult);
  } else if (event.key === 'Escape') {
    projectSearchResults.hidden = true;
    projectSearchInput.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.project-search-wrap')) {
    projectSearchResults.hidden = true;
    projectSearchInput.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    projectSearchInput.focus();
    projectSearchInput.select();
  }
});

selectDepartment(activeDepartment);
updateDepartmentScrollHint();
