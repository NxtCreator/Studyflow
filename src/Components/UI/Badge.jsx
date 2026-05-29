function Badge({ children, variant = "default" }) {

  const variants = {
    default: "bg-muted text-muted-foreground border-border",

    info: "bg-info/20 text-info border-border border-info/20",
    success: "bg-success/20 text-success border-border border-success/20",
    warning: "bg-warning/20 text-warning border-border border-warning",
    destructive: "bg-destructive/20 text-destructive border-destructive/20",
    neutral: "bg-muted-badge/10 text-muted-foreground border border-muted-badge/20",
  }

  return (
    <span
      className={`
        px-2 py-1
        text-xs
        font-medium
        border
        rounded-md
        ${variants[variant]}
      `}
    >
      {children}
    </span>
  )
}

export default Badge