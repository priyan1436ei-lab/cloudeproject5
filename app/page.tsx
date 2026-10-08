const features = [
  {
    title: 'Temporary workspaces',
    text: 'Launch a team workspace with a unique share link, password protection, and a countdown timer.',
  },
  {
    title: 'Smart file access',
    text: 'Upload documents, preview files, organize folders, and control read-only or edit permissions.',
  },
  {
    title: 'Auto-expiration',
    text: 'Workspace files vanish automatically when expiry ends, keeping collaboration secure and lightweight.',
  },
];

const stats = [
  { label: 'Workspaces', value: '24' },
  { label: 'Files shared', value: '1.3K' },
  { label: 'Storage used', value: '68%' },
  { label: 'Fresh activity', value: '12m ago' },
];

const workspaces = [
  { name: 'AI Project Team', expiry: '24h left', members: 4, access: 'Edit access' },
  { name: 'Design Review', expiry: '6h left', members: 3, access: 'View only' },
  { name: 'Campus Hackathon', expiry: '2d left', members: 7, access: 'Edit access' },
];

const files = [
  { name: 'brief.pdf', type: 'PDF', size: '2.4 MB' },
  { name: 'ideas.pptx', type: 'PPTX', size: '6.8 MB' },
  { name: 'team-notes.docx', type: 'DOCX', size: '920 KB' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-bold shadow-glow">
              C
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">CloudNest</p>
              <h1 className="text-xl font-semibold">Temporary Workspace</h1>
            </div>
          </div>

          <button className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/20">
            Create Workspace
          </button>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-glow">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300">Create → Upload → Collaborate → Expire</p>
            <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Secure temporary workspaces for fast team collaboration.
            </h2>
            <p className="mt-5 max-w-xl text-base text-slate-300">
              CloudNest gives teams a private, time-bound cloud space to upload files, review work, and share projects without clutter or lingering access.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
                Start a workspace
              </button>
              <button className="rounded-full border border-slate-700 bg-slate-800 px-6 py-3 font-medium text-slate-100 transition hover:border-slate-500">
                Watch demo
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-200">Workspace status</p>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300">Live</span>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-5">
              <p className="text-sm text-slate-300">AI Project Team</p>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold text-white">24h</p>
                  <p className="text-sm text-slate-400">Expiry timer</p>
                </div>
                <div className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                  Password protected
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/30 px-4 py-3">
                <span className="text-slate-300">Storage</span>
                <span className="font-medium text-white">68%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-400/20 text-lg text-cyan-200">
                ✦
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{feature.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Active workspaces</h3>
              <span className="text-sm text-slate-400">3 open</span>
            </div>

            <div className="space-y-4">
              {workspaces.map((workspace) => (
                <div key={workspace.name} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                  <div>
                    <p className="font-medium text-white">{workspace.name}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      {workspace.members} members • {workspace.access}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-cyan-300">{workspace.expiry}</p>
                    <div className="mt-2 h-2 w-20 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Recent files</h3>
              <span className="text-sm text-slate-400">3 items</span>
            </div>

            <div className="space-y-3">
              {files.map((file) => (
                <div key={file.name} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/40 p-3">
                  <div>
                    <p className="font-medium text-white">{file.name}</p>
                    <p className="text-sm text-slate-400">{file.type}</p>
                  </div>
                  <span className="text-sm text-slate-300">{file.size}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
