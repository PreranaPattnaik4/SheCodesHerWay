import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const roadmapPhases = [
  { phase: "Phase 1 (2025 Q1-Q2)", milestone: "Launch website and pilot the Sangini Udaan program." },
  { phase: "Phase 2 (2025 Q3)", milestone: "Build and expand our mentor and partner network." },
  { phase: "Phase 3 (2025 Q4)", milestone: "Introduce an online learning portal with diverse courses." },
  { phase: "Phase 4 (2027 Q1)", milestone: "Host the first annual 'Udaan Summit' for our community." },
  { phase: "Phase 5 (2027 Q2-Q3)", milestone: "Develop and integrate advanced AI coaching tools to provide personalized learning support." },
  { phase: "Phase 6 (2027 Q4)", milestone: "Launch a dedicated job board and career resource hub to connect members with opportunities." },
  { phase: "Phase 7 (2028)", milestone: "Expand our program offerings to include new specialized tracks and advanced-level courses." },
];

export default function Roadmap() {
  return (
    <section>
      <Card className="h-full shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Future Roadmap</CardTitle>
          <CardDescription>Our strategic plan for growth and impact.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Phase</TableHead>
                  <TableHead>Key Milestone</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roadmapPhases.map((item) => (
                  <TableRow key={item.phase}>
                    <TableCell className="font-medium whitespace-nowrap">{item.phase}</TableCell>
                    <TableCell>{item.milestone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
