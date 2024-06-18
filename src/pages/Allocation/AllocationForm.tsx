import {
    FormControl,
    FormLabel,
    Input,
    Select,
    FormHelperText,
    Stack,
    Button,
    useToast,
    FormErrorMessage,
  } from '@chakra-ui/react';
  import { useForm } from 'react-hook-form';
  import { zodResolver } from '@hookform/resolvers/zod';
  
  import { Link, useNavigate, useParams } from 'react-router-dom';
  import useSWR from 'swr';
  import Page from '../../components/Page';
  import { useEffect } from 'react';
  import env from '../../utils/env';
  import z from 'zod';
  
  interface Professor {
    id: number;
    name: string;
    cpf: string;
  }

  interface Course{
    id: number;
    name: string;
  }
  
  const schema = z.object({
    day: z.string().min(3),
    startHour: z.string().min(3),
    endHour: z.string().min(3),
    courseId: z.string().min(1),
    professorId: z.string().min(1),
  });
  
  export default function AllocationForm() {
    const { id } = useParams();
    const { data: allocation } = useSWR(id ? `allocations/${id}` : null);
    const navigate = useNavigate();
    const toast = useToast();
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
    });
  
    useEffect(() => {
      if (allocation) {
        setValue('day', allocation.day);
        setValue('startHour', allocation.startHour);
        setValue('endHour', allocation.endHour);
        setValue('courseId', allocation?.course?.id);
        setValue('professorId', allocation?.professor?.id);
      }
    }, [allocation]);
  
    async function onSubmit(form: any) {
      const response = await fetch(
        `${env.VITE_BACKEND_URL}/allocations${id ? `/${id}` : ''}`,
        {
          body: JSON.stringify(form),
          headers: { 'Content-Type': 'application/json' },
          method: id ? 'PUT' : 'POST',
        }
      );
  
      if (!response.ok) {
        return toast({
          status: 'error',
          title: `Something went wrong`,
          description: `Was not possible to complete your request`,
        });
      }
  
      toast({
        description: `${id ? 'Updated' : 'Created'} allocation`,
        title: 'Your request is completed successfully',
        status: 'success',
      });
  
      navigate('/allocation');
    }
  
    const { data: courses = [] } = useSWR<Course[]>('courses');
    const { data: professors = [] } = useSWR<Professor[]>('professors');

  
    console.log(errors);
  
    return (
      <Page title={`${id ? 'Update' : 'Create'} Allocation`}>
        <Stack gap={41}>
          <FormControl isRequired isInvalid={!!errors.day}>
            <FormLabel>Allocation Day of Week</FormLabel>
            <Input type='text' variant='flushed' {...register('day')} />
            <FormHelperText>Day of Week</FormHelperText>
            <FormErrorMessage>{errors?.day?.message}</FormErrorMessage>
          </FormControl>
  
          <FormControl isRequired isInvalid={!!errors.startHour}>
            <FormLabel>Start Hour</FormLabel>
            <Input type='text' variant='flushed' {...register('startHour')} />
            <FormErrorMessage>{errors?.startHour?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.endHour}>
            <FormLabel>End Hour</FormLabel>
            <Input type='text' variant='flushed' {...register('endHour')} />
            <FormErrorMessage>{errors?.endHour?.message}</FormErrorMessage>
          </FormControl>
  
          <FormControl isRequired>
            <FormLabel>Course</FormLabel>
            <Select
              placeholder='Select...'
              variant='flushed'
              {...register('courseId')}
              isInvalid={!!errors.courseId}
            >
              {courses.map((course, index) => (
                <option key={index} value={course.id}>
                  {course.name}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors?.courseId?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Professor</FormLabel>
            <Select
              placeholder='Select...'
              variant='flushed'
              {...register('professorId')}
              isInvalid={!!errors.professorId}
            >
              {professors.map((professor, index) => (
                <option key={index} value={professor.id}>
                  {professor.name}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors?.courseId?.message}</FormErrorMessage>
          </FormControl>
  
          <Stack display='flex' flexDirection='row'>
            <Button as={Link} to='/allocation' variant='outline'>
              Cancel
            </Button>
            <Button colorScheme='blue' variant='outline' onClick={handleSubmit(onSubmit)}>
              Save
            </Button>
          </Stack>
        </Stack>
      </Page>
    );
  }
  