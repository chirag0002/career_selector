import React, {useState, useEffect, useRef} from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import styled from 'styled-components'

const ArrowIcon = styled(ExpandLessIcon)`
&&{
    transform: ${props => props.open ? 'rotate(0)' : 'rotate(180deg)'};
    transition: transform 300ms ease-in-out;
    color: ${props => props.color ? props.color : '#000'};
    font-size: ${props => props.fontSize ? props.fontSize : '1rem'};
}
`
const CustomSelect = styled.div`
&&{
    display: flex;
    flex-direction: column;
    width: ${props => props.width ? `${props.width}` : '200px'};
    font-size: ${props => props.fontSize ? props.fontSize : '1rem'};
    text-align: center;
    border: 1px solid #c3c3c3;
    border-radius: 3px;
    text-align: start;
    margin: ${props => props.margin ? `${props.margin}` : '0 auto'};
}
`
const SelectMain = styled.div`
&&{
    width: 100%;
    height: 100%;
    display: flex;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
    border-radius: 3px;
    position: relative;
}
`
const SelectDropdownHolder = styled.div`
&&{
    position: relative;
    width: 100%;
    height: 0px;
}
`
const SelectDropdown = styled.div`
&&{
    position: absolute;
    top: 3px;
    z-index: 100000;
    opacity: 1;
    background-color: ${props => props.bgColor ? props.bgColor : '#fff'};
    width: ${props => props.width ? `${props.width}` : '200px'};
    max-height: ${props => props.isOpen ? '200px' : 0};
    overflow-y: auto;
    border: ${props => props.isOpen ? '1px' : 0} solid rgba(0,0,0,0.2);
    transition: max-height 400ms ease-in-out, border 400ms ease-in-out;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
}
`
const SelectOption = styled.button`
&&{
    width: 100%;
    cursor: pointer;
    padding: 0.3em;
    border: none;
    outline: none;
    text-align: start;
    font-size: ${props => props.fontSize ? props.fontSize : '1rem'};
    color: ${props => props.color ? props.color : '#000'};
    background-color: ${props => props.bgColor ? props.bgColor : '#fff'};
    &:hover{
        background-color: ${props => props.hoverColor ? props.hoverColor : 'orange'};
    }
}
`
const MainText = styled.div`
&&{
    width: 100%;
    height: 100%;
    padding: 0.4em;
    color: ${props => props.color ? props.color : "#000"};
}
`
const DropdownIconContainer = styled.div`
&&{
    height: 100%;
    min-width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
}
`
const CustomInputSelect = ({width, dropdownOptions = [], onChange, dropdownPlaceholder, dropdownValue, mainFontColor, mainBackgroundColor, optionHoverColor, fontSize, dropdownBackgroundColor, dropdownFontColor, margin, closeOnOutsideClick = true}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false)
    let placeholder = dropdownPlaceholder ? dropdownPlaceholder : 'Select...'

    const externalClickRef = useRef(null)

    useEffect(() => {

        function handleClickOutside(event) {
            if (externalClickRef.current && !externalClickRef.current.contains(event.target) && closeOnOutsideClick) {
                setDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [externalClickRef, closeOnOutsideClick]);

    return (
    <CustomSelect width={width} fontSize={fontSize} margin={margin} onClick={() => setDropdownOpen(!dropdownOpen)} ref={externalClickRef}>
        <SelectMain backgroundColor={mainBackgroundColor}>
            <MainText color={mainFontColor}>{dropdownValue ? dropdownValue : placeholder}</MainText>
            <DropdownIconContainer><ArrowIcon open={dropdownOpen} color={mainFontColor} fontSize={fontSize}/></DropdownIconContainer>
        </SelectMain>
        <SelectDropdownHolder>
        <SelectDropdown isOpen={dropdownOpen} width={width} bgColor={dropdownBackgroundColor}>{dropdownOptions.map(op => <SelectOption onClick={onChange} value={op} type="button" hoverColor={optionHoverColor} bgColor={dropdownBackgroundColor} color={dropdownFontColor} fontSize={fontSize}>{op}</SelectOption>)}</SelectDropdown>
        </SelectDropdownHolder>
    </CustomSelect>
    )
}

export default CustomInputSelect

