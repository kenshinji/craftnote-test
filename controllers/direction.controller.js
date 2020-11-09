exports.getDirection = (req, res) => {
        // check req param
        const heading = req.query.heading
        const target = req.query.target
    
        if(isNaN(heading)){
            return res.status(400).json({ message: 'heading is not a number.'})
        }
    
        if(isNaN(target)){
            return res.status(400).json({ message: 'target is not a number.'})
        }
    
        if(heading < 0 || heading > 359){
            return res.status(400).json({ message: 'heading should be ranging from 0 to 359.'})
        }
    
        if(target < 0 || target > 359){
            return res.status(400).json({ message: 'target should be ranging from 0 to 359.'})
        }
    
        // compute 
        const direction = calculateDirection(heading,target)
        return res.json({ direction })
}

const calculateDirection = (heading, target) => {
    if(heading === target){
        return "straight"
    }else if(heading > target){
        if(heading - target >= 180){
            return "right"
        }else{
            return "left"
        }
    }else{
        if(target - heading >= 180){
            return "left"
        }else{
            return "right"
        }
    }
}