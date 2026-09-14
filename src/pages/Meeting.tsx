import { useEffect, useState } from "react";
import {
  Copy,
  Hand,
  Maximize,
  MessageCircle,
  Mic,
  MicOff,
  MoreHorizontal,
  MonitorUp,
  PhoneOff,
  Settings,
  Users,
  Video,
  VideoOff,
  X,
} from "lucide-react";

const participants = [
  { name: "You", initials: "ME", speaking: true },
  { name: "Alex Morgan", initials: "AM", speaking: false },
  { name: "Jordan Lee", initials: "JL", speaking: false },
  { name: "Mia Chen", initials: "MC", speaking: false },
];

function Meeting() {
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [participantsOpen, setParticipantsOpen] = useState(false);
  const [handRaised, setHandRaised] = useState(false);
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const startedAt = Date.now();

    const interval = window.setInterval(() => {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);

      const minutes = Math.floor(elapsed / 60)
        .toString()
        .padStart(2, "0");

      const seconds = (elapsed % 60).toString().padStart(2, "0");

      setTime(`${minutes}:${seconds}`);
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const copyMeetingId = async () => {
    try {
      await navigator.clipboard.writeText("dnd-847-291");

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  const toggleParticipants = () => {
    setParticipantsOpen((open) => !open);
    setChatOpen(false);
  };

  const toggleChat = () => {
    setChatOpen((open) => !open);
    setParticipantsOpen(false);
  };

  return (
    <main className="flex min-h-screen w-full min-w-0 flex-col overflow-hidden bg-[#030811] text-white">
      {/* ==================== TOP BAR ==================== */}
      <header className="flex h-16 w-full shrink-0 items-center justify-between border-b border-white/[0.07] bg-[#07101d]/95 px-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <a href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-sm font-bold shadow-lg shadow-blue-500/20">
              D
            </div>

            <span className="hidden text-sm font-semibold sm:block">
              DND BRAND
            </span>
          </a>

          <div className="hidden h-5 w-px bg-white/10 sm:block" />

          <div className="min-w-0">
            <p className="truncate text-xs font-medium text-white sm:text-sm">
              Product planning
            </p>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-600">{time}</span>

              <span className="hidden text-[10px] text-slate-700 sm:inline">
                •
              </span>

              <button
                type="button"
                onClick={copyMeetingId}
                className="hidden items-center gap-1 text-[10px] text-slate-500 transition hover:text-white sm:flex"
              >
                dnd-847-291
                <Copy size={10} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={toggleParticipants}
            className={`flex h-9 w-9 items-center justify-center rounded-xl border transition sm:w-auto sm:px-3 ${
              participantsOpen
                ? "border-blue-400/30 bg-blue-500/10 text-blue-300"
                : "border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-white"
            }`}
            aria-label="Participants"
            aria-pressed={participantsOpen}
          >
            <Users size={16} />

            <span className="ml-2 hidden text-xs sm:block">4</span>
          </button>

          <button
            type="button"
            onClick={toggleChat}
            className={`flex h-9 w-9 items-center justify-center rounded-xl border transition sm:w-auto sm:px-3 ${
              chatOpen
                ? "border-blue-400/30 bg-blue-500/10 text-blue-300"
                : "border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-white"
            }`}
            aria-label="Open chat"
            aria-pressed={chatOpen}
          >
            <MessageCircle size={16} />

            <span className="ml-2 hidden text-xs sm:block">Chat</span>
          </button>

          <button
            type="button"
            className="hidden h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:bg-white/[0.07] hover:text-white sm:flex"
            aria-label="Meeting settings"
          >
            <Settings size={16} />
          </button>
        </div>
      </header>

      {/* ==================== MEETING CONTENT ==================== */}
      <div className="relative flex min-h-0 w-full flex-1">
        <section className="flex min-h-0 min-w-0 w-full flex-1 flex-col p-2 sm:p-4">
          {/* ==================== VIDEO STAGE ==================== */}
          <div className="relative flex min-h-0 w-full flex-1 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a1422]">
            {/* Main speaker */}
            <div className="relative flex min-h-[420px] w-full min-w-0 flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-[#17283d] via-[#0e1d30] to-[#07111e] sm:min-h-0">
              {/* Ambient glow */}
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />
              </div>

              {/* User */}
              <div className="relative flex flex-col items-center">
                {cameraOn ? (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl font-semibold shadow-2xl shadow-blue-500/20 sm:h-32 sm:w-32 sm:text-3xl">
                    ME
                  </div>
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-[#111d2d] text-slate-500 sm:h-32 sm:w-32">
                    <VideoOff size={30} />
                  </div>
                )}

                <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
                  <span className="text-xs font-medium text-white">
                    You
                  </span>

                  {!micOn && (
                    <MicOff
                      size={12}
                      className="text-red-400"
                    />
                  )}
                </div>
              </div>

              {/* Speaking indicator */}
              <div className="absolute left-3 top-3 flex items-center gap-2 rounded-lg border border-blue-400/20 bg-blue-500/10 px-2.5 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                <span className="text-[9px] font-medium text-blue-300">
                  You are speaking
                </span>
              </div>

              {/* Fullscreen */}
              <button
                type="button"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-slate-400 backdrop-blur-md transition hover:bg-black/40 hover:text-white"
                aria-label="Fullscreen"
              >
                <Maximize size={15} />
              </button>

              {/* Participant thumbnails */}
              <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2 sm:bottom-4 sm:left-4 sm:right-auto sm:w-[390px]">
                {participants.slice(1).map((participant) => (
                  <div
                    key={participant.name}
                    className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#111e30] shadow-xl"
                  >
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-700/50 to-slate-900">
                      <span className="text-sm font-semibold text-slate-300">
                        {participant.initials}
                      </span>
                    </div>

                    <div className="absolute bottom-1.5 left-1.5 flex max-w-[90%] items-center gap-1 rounded-md bg-black/40 px-1.5 py-1 backdrop-blur-md">
                      <span className="truncate text-[8px] text-white">
                        {participant.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ==================== PARTICIPANTS PANEL ==================== */}
            {participantsOpen && (
              <aside className="absolute inset-y-0 right-0 z-20 flex w-[min(88vw,320px)] flex-col border-l border-white/10 bg-[#091321]/98 shadow-2xl backdrop-blur-xl">
                <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/[0.07] px-4">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Participants
                    </p>

                    <p className="text-[10px] text-slate-600">
                      4 people in this meeting
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setParticipantsOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-white"
                    aria-label="Close participants"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="space-y-1 overflow-y-auto p-3">
                  {participants.map((participant) => (
                    <div
                      key={participant.name}
                      className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-white/[0.04]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-600 to-slate-800 text-[10px] font-semibold">
                          {participant.initials}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-xs font-medium text-white">
                            {participant.name}
                          </p>

                          <p className="mt-0.5 text-[9px] text-slate-600">
                            {participant.speaking
                              ? "Speaking"
                              : "Connected"}
                          </p>
                        </div>
                      </div>

                      <Mic
                        size={13}
                        className={
                          participant.speaking
                            ? "text-blue-400"
                            : "text-slate-600"
                        }
                      />
                    </div>
                  ))}
                </div>
              </aside>
            )}

            {/* ==================== CHAT PANEL ==================== */}
            {chatOpen && (
              <aside className="absolute inset-y-0 right-0 z-20 flex w-[min(88vw,340px)] flex-col border-l border-white/10 bg-[#091321]/98 shadow-2xl backdrop-blur-xl">
                <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/[0.07] px-4">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">
                      Meeting chat
                    </p>

                    <p className="truncate text-[10px] text-slate-600">
                      Messages are visible to everyone
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setChatOpen(false)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-white"
                    aria-label="Close chat"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="flex-1 space-y-4 overflow-y-auto p-4">
                  <div>
                    <p className="text-[9px] font-semibold text-slate-400">
                      Alex Morgan
                    </p>

                    <div className="mt-1.5 inline-block max-w-[85%] rounded-2xl rounded-tl-md border border-white/[0.06] bg-white/[0.04] px-3 py-2">
                      <p className="text-xs leading-5 text-slate-300">
                        Should we move the launch discussion to tomorrow?
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold text-slate-400">
                      Jordan Lee
                    </p>

                    <div className="mt-1.5 inline-block max-w-[85%] rounded-2xl rounded-tl-md border border-white/[0.06] bg-white/[0.04] px-3 py-2">
                      <p className="text-xs leading-5 text-slate-300">
                        That works for me.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-blue-500 px-3 py-2">
                      <p className="text-xs leading-5 text-white">
                        Perfect. I'll update the roadmap.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/[0.07] p-3">
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
                    <span className="flex-1 text-xs text-slate-600">
                      Write a message...
                    </span>

                    <button
                      type="button"
                      className="text-xs font-medium text-blue-400 transition hover:text-blue-300"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </aside>
            )}
          </div>

          {/* ==================== CONTROLS ==================== */}
          <div className="flex shrink-0 items-center justify-center gap-1.5 pt-3 sm:gap-2 sm:pt-4">
            {/* Microphone */}
            <button
              type="button"
              onClick={() => setMicOn((on) => !on)}
              className={`flex h-11 w-11 items-center justify-center rounded-xl border transition sm:h-12 sm:w-12 ${
                micOn
                  ? "border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/[0.09] hover:text-white"
                  : "border-red-400/20 bg-red-500/10 text-red-400"
              }`}
              aria-label={
                micOn
                  ? "Mute microphone"
                  : "Unmute microphone"
              }
              aria-pressed={!micOn}
            >
              {micOn ? (
                <Mic size={18} />
              ) : (
                <MicOff size={18} />
              )}
            </button>

            {/* Camera */}
            <button
              type="button"
              onClick={() => setCameraOn((on) => !on)}
              className={`flex h-11 w-11 items-center justify-center rounded-xl border transition sm:h-12 sm:w-12 ${
                cameraOn
                  ? "border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/[0.09] hover:text-white"
                  : "border-red-400/20 bg-red-500/10 text-red-400"
              }`}
              aria-label={
                cameraOn
                  ? "Turn camera off"
                  : "Turn camera on"
              }
              aria-pressed={!cameraOn}
            >
              {cameraOn ? (
                <Video size={18} />
              ) : (
                <VideoOff size={18} />
              )}
            </button>

            {/* Screen share */}
            <button
              type="button"
              className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-300 transition hover:bg-white/[0.09] hover:text-white sm:flex sm:h-12 sm:w-12"
              aria-label="Share screen"
            >
              <MonitorUp size={18} />
            </button>

            {/* Raise hand */}
            <button
              type="button"
              onClick={() => setHandRaised((raised) => !raised)}
              className={`flex h-11 w-11 items-center justify-center rounded-xl border transition sm:h-12 sm:w-12 ${
                handRaised
                  ? "border-blue-400/30 bg-blue-500/10 text-blue-300"
                  : "border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/[0.09] hover:text-white"
              }`}
              aria-label={
                handRaised
                  ? "Lower hand"
                  : "Raise hand"
              }
              aria-pressed={handRaised}
            >
              <Hand size={18} />
            </button>

            {/* More */}
            <button
              type="button"
              className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-300 transition hover:bg-white/[0.09] hover:text-white sm:flex sm:h-12 sm:w-12"
              aria-label="More meeting options"
            >
              <MoreHorizontal size={18} />
            </button>

            {/* Leave */}
            <button
              type="button"
              className="ml-1 flex h-11 w-14 items-center justify-center gap-1.5 rounded-xl bg-red-500 text-white shadow-lg shadow-red-500/10 transition hover:bg-red-400 sm:ml-2 sm:h-12 sm:w-auto sm:px-5"
              aria-label="Leave meeting"
            >
              <PhoneOff size={17} />

              <span className="hidden text-xs font-semibold sm:inline">
                Leave
              </span>
            </button>
          </div>
        </section>
      </div>

      {/* ==================== MOBILE MEETING ID ==================== */}
      <div className="flex shrink-0 items-center justify-center pb-3 sm:hidden">
        <button
          type="button"
          onClick={copyMeetingId}
          className="flex items-center gap-1.5 text-[10px] text-slate-600 transition hover:text-slate-300"
        >
          {copied ? "Meeting ID copied" : "dnd-847-291"}

          <Copy size={10} />
        </button>
      </div>

      {/* ==================== COPY FEEDBACK ==================== */}
      {copied && (
        <div className="pointer-events-none fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-white/10 bg-[#111d2c] px-3 py-2 text-xs text-slate-200 shadow-2xl">
          Meeting ID copied
        </div>
      )}
    </main>
  );
}

export default Meeting;