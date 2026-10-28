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
    ],
  },
  chemistry: {
    name: 'Chemistry',
    chapters: [
      {
        title: 'Atoms & elements',
        heading: 'The building blocks of matter',
        definition: 'An <strong>atom</strong> is the smallest unit of an element that still has that element’s properties. An element is a pure substance made from just one kind of atom.',
        example: 'A piece of pure gold is made of gold atoms. Oxygen, carbon, and iron are other examples of elements.',
        concept: 'MATTER AT ITS SMALLEST',
      },
      {
        title: 'Chemical bonds',
        heading: 'What holds atoms together',
        definition: 'A <strong>chemical bond</strong> is an attraction that holds atoms together. Atoms can share or transfer tiny particles called electrons to form bonds.',
        example: 'In a water molecule, two hydrogen atoms bond with one oxygen atom. The atoms form a stable group: H₂O.',
        concept: 'ATOMS JOIN TOGETHER',
      },
      {
        title: 'Reactions',
        heading: 'When substances become something new',
        definition: 'A <strong>chemical reaction</strong> rearranges atoms to turn starting substances into new substances. The atoms are still there; they have simply been connected in a different way.',
        example: 'When iron rusts, iron reacts with oxygen to form a new substance called iron oxide.',
        concept: 'CHANGE & TRANSFORMATION',
      },
    ],
  },
  physics: {
    name: 'Physics',
    chapters: [
      {
        title: 'Motion',
        heading: 'Describing how things move',
        definition: '<strong>Motion</strong> is a change in an object’s position over time. We can describe it by measuring how far the object travels and how long the journey takes.',
        example: 'A bicycle moving 10 meters each second has a speed of 10 meters per second.',
        concept: 'POSITION, DISTANCE & TIME',
      },
      {
        title: 'Forces',
        heading: 'Pushes and pulls that change motion',
        definition: 'A <strong>force</strong> is a push or pull on an object. Forces can start or stop motion, change direction, or change an object’s shape.',
        example: 'When you kick a stationary ball, your foot applies a force that makes the ball move.',
        concept: 'PUSH, PULL & CHANGE',
      },
      {
        title: 'Energy',
        heading: 'The ability to make change happen',
        definition: '<strong>Energy</strong> is the ability to cause change or do work. It can take many forms, including movement, heat, light, and stored energy.',
        example: 'A stretched rubber band stores energy. When released, that stored energy helps the band snap back.',
        concept: 'STORED & MOVING ENERGY',
      },
    ],
  },
};

const tabs = [...document.querySelectorAll('.department-tab')];
const chapterList = document.querySelector('#chapter-list');
const lessonCard = document.querySelector('#lesson-card');
const panel = document.querySelector('#department-content');
const chapterCount = document.querySelector('#chapter-count');

let activeDepartment = 'biology';
let activeChapter = 0;
const chapterTitleCollator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

tabs.forEach((tab) => {
  const count = departments[tab.dataset.department].chapters.length;
  tab.querySelector('.tab-count').textContent = String(count).padStart(2, '0');
});

function visibleChapters() {
  return departments[activeDepartment].chapters
    .map((chapter, index) => ({ chapter, index }))
    .sort((a, b) => chapterTitleCollator.compare(a.chapter.title, b.chapter.title));
}

function selectChapter(index, shouldScroll = false) {
  activeChapter = index;
  [...chapterList.children].forEach((button) => {
    const selected = Number(button.dataset.chapterIndex) === index;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-current', selected ? 'true' : 'false');
  });
  renderLesson(departments[activeDepartment].chapters[index]);
  if (shouldScroll && window.matchMedia('(max-width: 520px)').matches) {
    lessonCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderChapters() {
  const chapters = visibleChapters();
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
    button.addEventListener('mouseenter', () => selectChapter(index));
    button.addEventListener('focus', () => selectChapter(index));
    button.addEventListener('click', () => selectChapter(index, true));
    chapterList.append(button);
  });

  renderLesson(departments[activeDepartment].chapters[activeChapter]);
}

function renderLesson(chapter) {
  if (!chapter) {
    lessonCard.innerHTML = '<div class="empty-state"><strong>Nothing matched that search.</strong>Try another word or clear your search to see every chapter.</div>';
    return;
  }

  const chapters = departments[activeDepartment].chapters;
  const nextIndex = (activeChapter + 1) % chapters.length;
  if (chapter.architectureDevopsGuide) {
    const projectFiles = chapter.projectFiles.map((file) => `<article class="devops-file ${file.kind === 'GENERATED' ? 'generated' : ''}"><code>${file.path}</code><span>${file.kind}</span><p>${file.detail}</p></article>`).join('');
    const orgCards = chapter.organizationCards.map((card) => `<article class="devops-org-card ${card.color}"><div><span>${card.icon}</span><h5>${card.title}</h5></div><p>${card.definition}</p><small>Misalein</small><ul>${card.examples.map((example) => `<li>${example}</li>`).join('')}</ul></article>`).join('');
    const envCards = chapter.environmentFiles.map((file) => `<article class="devops-env-card ${file.color}"><div><h5>${file.title}</h5><span>${file.title === '.env.local' ? 'PRIVATE' : file.title === '.gitignore' ? 'GIT RULES' : 'SAFE TEMPLATE'}</span></div><p>${file.definition}</p><pre><code>${file.code}</code></pre></article>`).join('');
    const deploySteps = chapter.railwaySteps.map((step, index) => `<article class="railway-step ${step.color}"><div><span>${String(index + 1).padStart(2, '0')}</span><b>${step.icon}</b></div><h5>${step.title}</h5><p>${step.detail}</p></article>`).join('');
    const commands = chapter.railwayCommands.map((item) => `<div class="railway-command"><span>${item.label}</span><code>${item.command}</code></div>`).join('');
    const problems = chapter.troubleshooting.map((item) => `<article class="railway-problem ${item.color}"><div><span>${item.icon}</span><h5>${item.title}</h5></div><ul>${item.checks.map((check) => `<li>${check}</li>`).join('')}</ul>${item.note ? `<small>${item.note}</small>` : ''}</article>`).join('');
    const notes = chapter.devopsNotes.map((note, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span>${note}</li>`).join('');
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
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
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
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
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
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
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
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
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
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
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
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
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
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
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
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
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div><h3>${chapter.heading}</h3><p class="definition">${chapter.definition}</p>
      <div class="chat-category-grid">${groups}</div>
      <section class="platforms-section"><div class="platform-section-title"><span>⇄</span><div><h4>Chatwoot ke qareeb tools</h4><p>Yeh customer support, shared inbox ya chatbot-builder ke examples hain; har product ka focus aik jaisa nahi.</p></div></div><div class="platform-groups">${platforms}</div><div class="chatwoot-focus"><span class="chatwoot-mark">C</span><p><strong>Chatwoot ka focus:</strong> ${chapter.chatwootNote}</p><a href="https://www.chatwoot.com/community" target="_blank" rel="noreferrer">Chatwoot Community Edition <span aria-hidden="true">↗</span></a></div><div class="platform-caveat"><span>i</span>${chapter.compareNote}</div></section>
      <div class="lesson-bottom"><span class="lesson-bottom-label">CATEGORY INTKHAAB → USER KI ZAROORAT KE MUTABIQ</span><button class="next-button" type="button">Next chapter <span aria-hidden="true">→</span></button></div>`;
    lessonCard.querySelector('.next-button').addEventListener('click', () => { activeChapter = nextIndex; renderChapters(); });
    return;
  }
  if (chapter.envGuide) {
    lessonCard.innerHTML = `
      <div class="lesson-topline"><span class="lesson-tag">${chapter.concept}</span><span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span></div>
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
        <span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
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
        <span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
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
        <span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
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
        <span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
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
        <span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
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
    lessonCard.innerHTML = `
      <div class="lesson-topline">
        <span class="lesson-tag">${chapter.concept}</span>
        <span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
      </div>
      <h3>${chapter.heading}</h3>
      <p class="definition">${chapter.definition}</p>
      <div class="manager-grid">${managerCards}</div>
      <section class="package-comparison" aria-label="Package managers ka aik line mein muqabla">
        <h4>Aik nazar mein muqabla</h4><div class="package-summary-grid">${comparisonCards}</div>
      </section>
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
        <span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
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
        <span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
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

  lessonCard.innerHTML = `
    <div class="lesson-topline">
      <span class="lesson-tag">${chapter.concept}</span>
      <span class="lesson-index">${String(activeChapter + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}</span>
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
  activeDepartment = department;
  activeChapter = 0;
  tabs.forEach((tab) => {
    const selected = tab.dataset.department === department;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focusTab) tab.focus();
  });
  const selectedTab = tabs.find((tab) => tab.dataset.department === department);
  panel.setAttribute('aria-labelledby', selectedTab.id);
  renderChapters();
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectDepartment(tab.dataset.department));
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

renderChapters();
