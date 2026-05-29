
function PriorityButton({ id, label, active, onClick }) {

    const colorMap = {
        high: {
            bg: "bg-red-100",
            border: "border-red-400",
            dot: "bg-red-500"
        },
        medium: {
            bg: "bg-orange-100",
            border: "border-orange-400",
            dot: "bg-orange-500"
        },
        low: {
            bg: "bg-green-100",
            border: "border-green-400",
            dot: "bg-green-500"
        }
    };

    const colors = colorMap[id];

  return (
    <button 
        onClick={onClick}
        className={`
            flex items-center justify-center gap-3 border-2 rounded-lg py-1  transition
            ${active ? `${colors.bg} border-2 ${colors.border}` : 'bg-slate-100 border-slate-300 hover:border-slate-600'}`}>
        <div className={`size-2 rounded-full ${colors.dot}`} />
        {label}
    </button>
  );
}

export default PriorityButton