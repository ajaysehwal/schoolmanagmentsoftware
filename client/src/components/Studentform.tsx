import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  IconButton
} from '@material-tailwind/react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import React from 'react';
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid';
import ChartTwo from './ChartTwo';
import { Select, Option } from '@material-tailwind/react';

export default function StudentAdmissionform() {
  return (
    <Card
      style={{ padding: '20px' }}
      className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4"
      color="transparent"
      shadow={false}
    >
      <form
        className="mt-8 mb-2 max-w-screen-lg sm:w-96"
        style={{ width: '100%', margin: 'auto' }}
      >
        <div
          
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <Input size="lg" label="Full name" />
          <Input size="lg" label="Birthday" type="date" />
          <Input size="lg" label="Father name / Parent" type="date" />
          <Input size="lg" label="Mother name / Parent" type="date" />

          <Input size="lg" label="Mother tougue" />
          <Input size="lg" label="Address" />
          <Input size="lg" label="Nationality" />
          <Input size="lg" label="Admission no" type="number" />
          <Input size="lg" label="Age" type="number" />
          <Input size="lg" label="Religion" />
          <Input size="lg" label="City" />
          <Input size="lg" label="Phone" />
          <Input size="lg" label="Previous school name" />
          <Input size="lg" label="Class in which was studing" />
          <Input size="lg" label="Email" />
          <Input size="lg" label="Previous school name" />
          <Select variant="outlined" label="Transfer certificate">
            <Option>Yes</Option>
            <Option>No</Option>
          </Select>
          <Select variant="outlined" label="Physical handicap">
            <Option>Yes</Option>
            <Option>No</Option>
          </Select>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Select variant="outlined" size="lg"  label="Select House">
            <Option>Yes</Option>
            <Option>No</Option>
          </Select>
          <IconButton className="rounded-full" fullWidth>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </IconButton>
        </div>
          <Select variant="outlined" label="Student category">
            <Option>Yes</Option>
            <Option>No</Option>
          </Select>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Select variant="outlined" size="lg"  label="Select class">
            <Option>Yes</Option>
            <Option>No</Option>
          </Select>
          <IconButton className="rounded-full" fullWidth>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </IconButton>
        </div>
          <Input size="lg" label="Place birth" />
          <Input size="lg" label="State" />
          <Input size="lg" label="Blood group" />
          <Input size="lg" label="The address" />
          <Input size="lg" label="Date of Leaving" type="date" />
          <Input size="lg" label="Student Document" type="file" />

          <Select variant="outlined" label="Bith certificate">
            <Option>Yes</Option>
            <Option>No</Option>
          </Select>
          <Input size="lg" label="Other Document" type="file"/>
          <Input size="lg" label="Student Image" type='file' />
          <Input size="lg" label="Additional Information" type='text' />

          
        </div>

        <Button className="mt-6" fullWidth>
        Register
        </Button>
      </form>
    </Card>
  );
}
