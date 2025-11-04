import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  { name: "Learning & Training", description: "Workshops on coding, AI, storytelling, and leadership." },
  { name: "Mentorship", description: "Connecting learners with experts and industry professionals." },
  { name: "Community", description: "Webinars, bootcamps, and discussion circles for collaboration." },
  { name: "Opportunities", description: "Facilitating internships, live projects, and collaborations." },
  { name: "Awareness", description: "Sharing success stories and promoting women in tech." },
];

export default function CoreActivities() {
  return (
    <section>
      <Card className="h-full shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Core Activities</CardTitle>
          <CardDescription>Our key initiatives to empower women.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Activity</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((activity) => (
                  <TableRow key={activity.name}>
                    <TableCell className="font-medium">{activity.name}</TableCell>
                    <TableCell>{activity.description}</TableCell>
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
