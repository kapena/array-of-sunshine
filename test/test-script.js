var expect = chai.expect;
var should = chai.should();
var sandbox;

beforeEach(function() {
  sandbox = sinon.sandbox.create();
});

afterEach(function() {
  sandbox.restore();
});

describe('.reverseString', function() {
  it('should be a function', function() {
    expect(reverseString).to.be.a('function');
  });
  it('should return the reversed string', function() {
    reverseString('Kirby').should.equal('ybriK');
    reverseString('My string of characters').should.equal('sretcarahc fo gnirts yM');
  });
});

describe('.spliceString', function() {
  it('should be a function', function() {
    expect(spliceString).to.be.a('function');
  });
  it('should return the modified string', function() {
    spliceString('Happy Halloween', 'y').should.equal('nHappy Halloweenye');
    spliceString('Hocus Pocus', 'r').should.equal('sHocus Pocru');
  });
});

describe('.speakPigLatin', function() {
  it('should be a function', function() {
    expect(speakPigLatin).to.be.a('function');
  });
  it('should return an array with the strings in Pig Latin form', function() {
    expect(['hello', 'goodbye']).to.be.an('Array');
    var result = speakPigLatin(['she', 'sells', 'seashells', 'by', 'the', 'seashore']);
    expect(result).to.include('hesay', 'ellssay', 'eashellssay', 'ybay', 'hetay', 'eashoresay');
  });
});
