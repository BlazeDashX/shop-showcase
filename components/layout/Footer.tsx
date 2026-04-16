import Link from "next/link";
import Container from "@/components/ui/Container";

const footerLinks = [
    { label: "Collection", href: "/#products" },
    { label: "Admin", href: "/admin" },
];

export default function Footer() {
    return (
        <footer
            className="border-t"
            style={{
                borderColor: "var(--gunmetal-lighter)",
                background: "var(--gunmetal-dark)",
            }}
        >
            <Container>
                <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <div className="flex items-center gap-3">
                            <span
                                className="w-7 h-7 rounded-sm flex items-center justify-center text-xs font-mono font-bold"
                                style={{
                                    background: "var(--chartreuse)",
                                    color: "var(--gunmetal-dark)",
                                }}
                            >
                                LX
                            </span>
                            <span
                                className="font-display text-lg font-bold"
                                style={{ color: "var(--white)" }}
                            >
                                LUXE
                            </span>
                        </div>
                        <p
                            className="font-body text-xs max-w-[220px] text-center md:text-left leading-relaxed"
                            style={{ color: "var(--gunmetal-lighter)" }}
                        >
                            A curated collection of premium products. Quality you can feel.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex items-center gap-8">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-body text-sm transition-colors duration-200 hover:text-white"
                                style={{ color: "rgba(255,255,255,0.4)" }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Legal */}
                    <div
                        className="font-mono text-xs tracking-widest uppercase"
                        style={{ color: "var(--gunmetal-lighter)" }}
                    >
                        © {new Date().getFullYear()} LUXE
                    </div>
                </div>

                {/* Bottom accent bar */}
                <div
                    className="h-px w-full mb-0"
                    style={{
                        background:
                            "linear-gradient(to right, transparent, var(--chartreuse), transparent)",
                        opacity: 0.3,
                    }}
                />
                <div className="py-4 text-center">
                    <span
                        className="font-mono text-[10px] tracking-widest uppercase"
                        style={{ color: "rgba(255,255,255,0.15)" }}
                    >
                        Crafted with precision
                    </span>
                </div>
            </Container>
        </footer>
    );
}