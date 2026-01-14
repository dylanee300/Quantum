export function GET() {
    return new Response(
        JSON.stringify({
            credits: [
                { name: "Dylanee", pfp: "/dylan.png", desc: "Co-Founder, Developer" },
                { name: "Chris", pfp: "/chris.png", desc: "Co-Founder, Artist", },
            ]
        }),
        {
            headers: { 'Content-Type': 'application/json' },
        }
    )
}