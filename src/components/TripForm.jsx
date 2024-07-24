import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const TripForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="tripName">Trip Name</Label>
        <Input id="tripName" placeholder="Enter trip name" />
      </div>
      <div>
        <Label htmlFor="startDate">Start Date</Label>
        <Input id="startDate" type="date" />
      </div>
      <div>
        <Label htmlFor="endDate">End Date</Label>
        <Input id="endDate" type="date" />
      </div>
      <div>
        <Label htmlFor="participants">Participants</Label>
        <Input id="participants" placeholder="Enter participants" />
      </div>
      <div>
        <Label htmlFor="difficulty">Difficulty Level</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea id="notes" placeholder="Enter any additional notes" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default TripForm;