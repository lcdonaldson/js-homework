Interview Question Examples.

# 1 return a string in reverse order. ex( hello == olleh )

function reverseString(exstr) {
    return exstr.split("").reverse().join("");
}
reverseString("hey guys this reversed");


# Now with recursion. This is more functional but slower in this case.

function reverseString(exstr) {
  if (exstr === "")
    return "";
  
  else
    return reverseString(exstr.substr(1)) + exstr.charAt(0);
}
reverseString("hello");


#2 return a palindrome (this is when a word is spelled the same way even in reverse (ex. AVA)

// not a palindrome
function pal(str){	
	const rev = str.split('').reverse().join('');
	return rev;
}

pal('this is not a palindrome');


// this returns a true value for a palindrome 
function pal(str){	
	var a = str;
	const rev = str.split('').reverse().join('');
	if(rev === a){
		return true;
	} else {
		return false;
	}
}

pal('abba');
