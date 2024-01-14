import { useEffect, useState } from "react";
import Task from "./TaskCard";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types';

export default function TaskList({list}) {
    const [countTaskPending, setCountTaskPending] =useState(0)
    // const [status, setStatus] =useState(false)

    

    useEffect(()=> {
        const pendingTasks = list.filter((task)=> !task.completed).length
        setCountTaskPending(pendingTasks)
    },[list]);
    
  return (
    <Box p="15" >
        {
            list.map((data, index)=>{
               return <Task content={data.content} key={index}/>
            })
        }
        <Flex
    direction={{ base: "column", md: "row" }}
    gap={5}
    alignItems={{ base: "center", md: "center" }}
    justifyContent={{ base: "center", md: "space-between" }}
    mt={5}
>
    <Text
        fontSize={{ base: "md", md: "lg" }}
        fontWeight="bold"
        color="#8a7e66"
        textAlign={{ base: "center", md: "left" }}
    >
        You have {countTaskPending} pending {countTaskPending === 1 ? "task" : "tasks"}
    </Text>
    <Button
        background="#bbb2a1"
        borderColor="#bbb2a1"
        borderRadius={5}
        p={{ base: 2, md: 0 }}
        w={{ base: "100%", md: "auto" }}
        color="#fff"
        _hover={{ background: "#a79b83" }}
        // onClick={onClearAll}
    >
        Clear all
    </Button>
</Flex>

    </Box>

  )
}
TaskList.propTypes = {
    list: PropTypes.array.isRequired,
};
